PYTHON ?= python3

.PHONY: validate test

validate:
	$(PYTHON) scripts/validate_quizzes.py

test:
	$(PYTHON) -m unittest discover -s tests -v
