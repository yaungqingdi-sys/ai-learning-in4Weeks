PYTHON ?= python3

.PHONY: validate sample-score sample-report test serve-web

validate:
	$(PYTHON) scripts/validate_quizzes.py

sample-score:
	$(PYTHON) scripts/score_submission.py --quiz quizzes/final-exam.json --submission examples/sample_submission.json --manual-scores examples/sample_manual_scores.json --output examples/sample_score.json

sample-report: sample-score
	$(PYTHON) scripts/generate_progress_report.py --score examples/sample_score.json --output examples/sample_progress_report.md

test:
	$(PYTHON) -m unittest discover -s tests -v

serve-web:
	$(PYTHON) scripts/serve_course.py --port 8000
