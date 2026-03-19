#!/usr/bin/env python3
"""Score quiz submissions."""

from __future__ import annotations

import argparse
import json
from collections import Counter
from pathlib import Path
from typing import Any


OBJECTIVE_TYPES = {"single_choice", "true_false"}
SUBJECTIVE_TYPES = {"short_answer", "scenario"}


def load_json(path: Path) -> Any:
    with path.open("r", encoding="utf-8") as handle:
        return json.load(handle)


def normalize_single_choice(value: Any) -> str | None:
    if value is None:
        return None
    text = str(value).strip().upper()
    return text or None


def normalize_true_false(value: Any) -> bool | None:
    if isinstance(value, bool):
        return value
    if value is None:
        return None
    normalized = str(value).strip().lower()
    truthy = {"true", "t", "1", "yes", "y", "正确", "对"}
    falsy = {"false", "f", "0", "no", "n", "错误", "错"}
    if normalized in truthy:
        return True
    if normalized in falsy:
        return False
    return None


def build_subjective_rubric(question: dict[str, Any]) -> dict[str, Any]:
    answer = question.get("answer", [])
    if isinstance(answer, str):
        key_points = [answer]
    else:
        key_points = answer
    return {
        "checklist": key_points,
        "scoring_hint": "重点看是否抓住核心概念、是否区分相近概念、是否给出验证或边界动作。",
    }


def load_manual_scores(path: Path | None) -> dict[str, dict[str, Any]]:
    if path is None:
        return {}
    data = load_json(path)
    scores = data.get("scores", {})
    if not isinstance(scores, dict):
        raise ValueError("manual score file must contain a 'scores' object")
    return scores


def score_submission(
    quiz: dict[str, Any],
    submission: dict[str, Any],
    manual_scores: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    manual_scores = manual_scores or {}
    answers = submission.get("answers", {})
    if not isinstance(answers, dict):
        raise ValueError("submission.answers must be an object")

    total_possible = 0
    auto_possible = 0
    auto_earned = 0
    manual_possible = 0
    manual_earned = 0
    objective_correct = 0
    objective_total = 0
    results: list[dict[str, Any]] = []
    weak_tags: Counter[str] = Counter()
    pending_manual = 0

    for question in quiz["questions"]:
        qid = question["id"]
        qtype = question["type"]
        qscore = question["score"]
        total_possible += qscore
        submitted = answers.get(qid)

        result: dict[str, Any] = {
            "id": qid,
            "type": qtype,
            "max_score": qscore,
            "submitted_answer": submitted,
            "tags": question["tags"],
            "explanation": question["explanation"],
        }

        if qtype in OBJECTIVE_TYPES:
            objective_total += 1
            auto_possible += qscore
            if qtype == "single_choice":
                normalized = normalize_single_choice(submitted)
                expected = question["answer"]
                correct = normalized == expected
            else:
                normalized = normalize_true_false(submitted)
                expected = question["answer"]
                correct = normalized == expected
            earned = qscore if correct else 0
            auto_earned += earned
            if correct:
                objective_correct += 1
            else:
                weak_tags.update(question["tags"])
            result.update(
                {
                    "status": "correct" if correct else "incorrect",
                    "earned_score": earned,
                    "correct_answer": expected,
                }
            )
        else:
            manual_possible += qscore
            rubric = build_subjective_rubric(question)
            manual_item = manual_scores.get(qid)
            if manual_item is None:
                pending_manual += 1
                earned = 0
                status = "pending_manual_review"
                comment = ""
            else:
                raw_score = manual_item.get("score", 0)
                if not isinstance(raw_score, (int, float)):
                    raise ValueError(f"manual score for {qid} must be numeric")
                earned = max(0, min(qscore, int(raw_score)))
                manual_earned += earned
                status = "manual_scored"
                comment = str(manual_item.get("comment", ""))
                if earned < qscore:
                    weak_tags.update(question["tags"])
            result.update(
                {
                    "status": status,
                    "earned_score": earned,
                    "reference_answer": question["answer"],
                    "rubric": rubric,
                    "manual_comment": comment,
                }
            )
        results.append(result)

    final_score = auto_earned + manual_earned
    percent = round((final_score / total_possible) * 100, 2) if total_possible else 0.0
    passing_percent = quiz["passing_percent"]
    if pending_manual > 0:
        threshold_status = "pending_manual_review"
    else:
        threshold_status = "pass" if percent >= passing_percent else "fail"

    weak_tag_items = [
        {"tag": tag, "count": count}
        for tag, count in weak_tags.most_common()
    ]

    return {
        "quiz_id": quiz["quiz_id"],
        "title": quiz["title"],
        "student_name": submission.get("student_name", "未知学员"),
        "total_possible_score": total_possible,
        "auto_possible_score": auto_possible,
        "auto_earned_score": auto_earned,
        "manual_possible_score": manual_possible,
        "manual_earned_score": manual_earned,
        "final_score": final_score,
        "percent": percent,
        "passing_percent": passing_percent,
        "threshold_status": threshold_status,
        "pending_manual_count": pending_manual,
        "summary": {
            "objective_correct": objective_correct,
            "objective_total": objective_total,
        },
        "weak_tags": weak_tag_items,
        "results": results,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description="Score a quiz submission.")
    parser.add_argument("--quiz", required=True, help="Path to quiz JSON file")
    parser.add_argument("--submission", required=True, help="Path to submission JSON file")
    parser.add_argument(
        "--manual-scores",
        help="Optional path to manual subjective score JSON file",
    )
    parser.add_argument(
        "--output",
        help="Optional path to write the score report JSON",
    )
    args = parser.parse_args()

    quiz = load_json(Path(args.quiz))
    submission = load_json(Path(args.submission))
    manual_scores = load_manual_scores(Path(args.manual_scores)) if args.manual_scores else {}
    report = score_submission(quiz, submission, manual_scores)

    text = json.dumps(report, ensure_ascii=False, indent=2)
    if args.output:
        output_path = Path(args.output)
        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(text + "\n", encoding="utf-8")
        print(f"Score report written to {output_path}")
    else:
        print(text)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
