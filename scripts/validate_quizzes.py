#!/usr/bin/env python3
"""Validate quiz JSON files."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
from typing import Any

ALLOWED_TYPES = {"single_choice", "true_false", "short_answer", "scenario"}
ALLOWED_DIFFICULTIES = {"easy", "medium", "hard"}
REQUIRED_TOP_LEVEL = {"quiz_id", "title", "description", "passing_percent", "questions"}
REQUIRED_QUESTION_FIELDS = {
    "id",
    "type",
    "prompt",
    "answer",
    "explanation",
    "score",
    "tags",
    "difficulty",
}


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def _validate_options(options: Any, path: Path, question_id: str) -> list[str]:
    errors: list[str] = []
    if not isinstance(options, list) or not options:
        return [f"{path}: {question_id} options must be a non-empty list"]

    seen_keys: set[str] = set()
    for item in options:
        if not isinstance(item, dict):
            errors.append(f"{path}: {question_id} option must be an object")
            continue
        key = item.get("key")
        text = item.get("text")
        if not isinstance(key, str) or not key.strip():
            errors.append(f"{path}: {question_id} option.key must be a non-empty string")
        if not isinstance(text, str) or not text.strip():
            errors.append(f"{path}: {question_id} option.text must be a non-empty string")
        if key in seen_keys:
            errors.append(f"{path}: {question_id} option keys must be unique")
        seen_keys.add(key)
    return errors


def validate_quiz(quiz: Any, path: Path) -> list[str]:
    errors: list[str] = []
    if not isinstance(quiz, dict):
        return [f"{path}: top-level JSON must be an object"]

    missing = REQUIRED_TOP_LEVEL - set(quiz.keys())
    if missing:
        errors.append(f"{path}: missing top-level fields: {sorted(missing)}")

    if not isinstance(quiz.get("quiz_id"), str) or not quiz["quiz_id"].strip():
        errors.append(f"{path}: quiz_id must be a non-empty string")
    if not isinstance(quiz.get("title"), str) or not quiz["title"].strip():
        errors.append(f"{path}: title must be a non-empty string")
    if not isinstance(quiz.get("description"), str) or not quiz["description"].strip():
        errors.append(f"{path}: description must be a non-empty string")

    passing = quiz.get("passing_percent")
    if not isinstance(passing, (int, float)) or not (0 < passing <= 100):
        errors.append(f"{path}: passing_percent must be a number between 1 and 100")

    questions = quiz.get("questions")
    if not isinstance(questions, list) or not questions:
        errors.append(f"{path}: questions must be a non-empty list")
        return errors

    seen_ids: set[str] = set()
    for index, question in enumerate(questions, start=1):
        prefix = f"{path}: question #{index}"
        if not isinstance(question, dict):
            errors.append(f"{prefix} must be an object")
            continue

        missing_fields = REQUIRED_QUESTION_FIELDS - set(question.keys())
        if missing_fields:
            errors.append(f"{prefix} missing fields: {sorted(missing_fields)}")
            continue

        question_id = question.get("id")
        if not isinstance(question_id, str) or not question_id.strip():
            errors.append(f"{prefix} id must be a non-empty string")
            continue
        if question_id in seen_ids:
            errors.append(f"{path}: duplicate question id {question_id}")
        seen_ids.add(question_id)

        qtype = question.get("type")
        if qtype not in ALLOWED_TYPES:
            errors.append(f"{path}: {question_id} has invalid type {qtype!r}")

        prompt = question.get("prompt")
        if not isinstance(prompt, str) or not prompt.strip():
            errors.append(f"{path}: {question_id} prompt must be a non-empty string")

        explanation = question.get("explanation")
        if not isinstance(explanation, str) or not explanation.strip():
            errors.append(f"{path}: {question_id} explanation must be a non-empty string")

        score = question.get("score")
        if not isinstance(score, int) or not (1 <= score <= 20):
            errors.append(f"{path}: {question_id} score must be an integer between 1 and 20")

        tags = question.get("tags")
        if (
            not isinstance(tags, list)
            or not tags
            or not all(isinstance(tag, str) and tag.strip() for tag in tags)
        ):
            errors.append(f"{path}: {question_id} tags must be a non-empty list of strings")

        difficulty = question.get("difficulty")
        if difficulty not in ALLOWED_DIFFICULTIES:
            errors.append(f"{path}: {question_id} difficulty must be one of {sorted(ALLOWED_DIFFICULTIES)}")

        answer = question.get("answer")
        if qtype == "single_choice":
            errors.extend(_validate_options(question.get("options"), path, question_id))
            option_keys = {
                item.get("key")
                for item in question.get("options", [])
                if isinstance(item, dict) and isinstance(item.get("key"), str)
            }
            if not isinstance(answer, str) or answer not in option_keys:
                errors.append(f"{path}: {question_id} answer must match one option key")
        elif qtype == "true_false":
            errors.extend(_validate_options(question.get("options"), path, question_id))
            if not isinstance(answer, bool):
                errors.append(f"{path}: {question_id} answer must be a boolean")
        elif qtype in {"short_answer", "scenario"}:
            if "options" in question and question["options"] not in (None, []):
                errors.append(f"{path}: {question_id} should not define options for subjective questions")
            if not isinstance(answer, (str, list)):
                errors.append(f"{path}: {question_id} answer must be a string or list")
            if isinstance(answer, list) and not all(
                isinstance(item, str) and item.strip() for item in answer
            ):
                errors.append(f"{path}: {question_id} answer list must contain non-empty strings only")

    return errors


def validate_paths(paths: list[Path]) -> list[str]:
    errors: list[str] = []
    for path in paths:
        try:
            quiz = load_json(path)
        except json.JSONDecodeError as exc:
            errors.append(f"{path}: invalid JSON - {exc}")
            continue
        except OSError as exc:
            errors.append(f"{path}: unable to read file - {exc}")
            continue
        errors.extend(validate_quiz(quiz, path))
    return errors


def discover_quiz_files(target: Path) -> list[Path]:
    if target.is_file():
        return [target]
    return sorted(target.glob("*.json"))


def main() -> int:
    parser = argparse.ArgumentParser(description="Validate quiz JSON files.")
    parser.add_argument(
        "target",
        nargs="?",
        default="quizzes",
        help="Quiz JSON file or directory. Defaults to quizzes/",
    )
    args = parser.parse_args()

    target = Path(args.target)
    quiz_files = discover_quiz_files(target)
    if not quiz_files:
        print(f"No quiz files found under {target}")
        return 1

    errors = validate_paths(quiz_files)
    if errors:
        print("Quiz validation failed:")
        for item in errors:
            print(f"- {item}")
        return 1

    print(f"Validated {len(quiz_files)} quiz file(s) successfully.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
