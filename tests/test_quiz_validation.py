from pathlib import Path
import tempfile
import unittest

from scripts.validate_quizzes import load_json, validate_paths


class QuizValidationTests(unittest.TestCase):
    def test_all_quizzes_validate(self) -> None:
        quiz_dir = Path(__file__).resolve().parent.parent / "quizzes"
        quiz_files = sorted(quiz_dir.glob("*.json"))
        self.assertEqual(len(quiz_files), 5)
        errors = validate_paths(quiz_files)
        self.assertEqual(errors, [])

    def test_invalid_quiz_is_detected(self) -> None:
        with tempfile.TemporaryDirectory() as temp_dir:
            bad_quiz = Path(temp_dir) / "bad.json"
            bad_quiz.write_text(
                """
                {
                  "quiz_id": "bad",
                  "title": "bad",
                  "description": "bad",
                  "passing_percent": 80,
                  "questions": [
                    {
                      "id": "B-1",
                      "type": "single_choice",
                      "prompt": "x",
                      "answer": "Z",
                      "explanation": "x",
                      "score": 3,
                      "tags": ["x"],
                      "difficulty": "easy",
                      "options": [{"key": "A", "text": "a"}]
                    }
                  ]
                }
                """,
                encoding="utf-8",
            )
            errors = validate_paths([bad_quiz])
            self.assertTrue(any("must match one option key" in item for item in errors))


if __name__ == "__main__":
    unittest.main()
