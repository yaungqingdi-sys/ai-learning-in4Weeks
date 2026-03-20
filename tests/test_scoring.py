from pathlib import Path
import unittest

from scripts.generate_progress_report import generate_report_markdown
from scripts.score_submission import load_json, score_submission


class ScoringTests(unittest.TestCase):
    def setUp(self) -> None:
        root = Path(__file__).resolve().parent.parent
        self.quiz = load_json(root / "quizzes" / "final-exam.json")
        answers = {}
        manual_scores = {}

        for question in self.quiz["questions"]:
            if question["type"] in {"single_choice", "true_false"}:
                answers[question["id"]] = question["answer"]
            else:
                answers[question["id"]] = "测试作答"
                manual_scores[question["id"]] = {
                    "score": question["score"],
                    "comment": "测试满分样例",
                }

        self.submission = {
            "student_name": "测试学员",
            "answers": answers,
        }
        self.manual_scores = manual_scores

    def test_sample_submission_scores(self) -> None:
        report = score_submission(self.quiz, self.submission, self.manual_scores)
        self.assertEqual(report["threshold_status"], "pass")
        self.assertEqual(report["final_score"], report["total_possible_score"])
        self.assertEqual(report["summary"]["objective_total"], report["summary"]["objective_correct"])

    def test_report_generation_contains_core_sections(self) -> None:
        score_data = score_submission(self.quiz, self.submission, self.manual_scores)
        markdown = generate_report_markdown(score_data)
        self.assertIn("# 学习进度报告", markdown)
        self.assertIn("是否达到 80 分：是", markdown)
        self.assertIn("薄弱点", markdown)


if __name__ == "__main__":
    unittest.main()
