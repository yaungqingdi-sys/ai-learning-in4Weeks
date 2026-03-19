from pathlib import Path
import unittest

from scripts.generate_progress_report import generate_report_markdown
from scripts.score_submission import load_json, load_manual_scores, score_submission


class ScoringTests(unittest.TestCase):
    def setUp(self) -> None:
        root = Path(__file__).resolve().parent.parent
        self.quiz = load_json(root / "quizzes" / "final-exam.json")
        self.submission = load_json(root / "examples" / "sample_submission.json")
        self.manual_scores = load_manual_scores(root / "examples" / "sample_manual_scores.json")

    def test_sample_submission_scores(self) -> None:
        report = score_submission(self.quiz, self.submission, self.manual_scores)
        self.assertEqual(report["threshold_status"], "pass")
        self.assertEqual(report["final_score"], 108)
        self.assertEqual(report["summary"]["objective_total"], 16)
        self.assertEqual(report["summary"]["objective_correct"], 14)

    def test_report_generation_contains_core_sections(self) -> None:
        score_data = score_submission(self.quiz, self.submission, self.manual_scores)
        markdown = generate_report_markdown(score_data)
        self.assertIn("# 学习进度报告", markdown)
        self.assertIn("是否达到 80 分：是", markdown)
        self.assertIn("薄弱点", markdown)


if __name__ == "__main__":
    unittest.main()
