name: Bug Report
description: Create a report to help us solve the bug
title: "[Bug]: "
labels: ["Type: Bug"]
body:
- type: textarea
  attributes:
    label: Describe the bug
    description: What's wrong?
    placeholder: |
      When I do X then Y happens.
    render: markdown
  validations:
    required: true
- type: textarea
  attributes:
    label: To Reproduce
    description: How to reproduce; what key sequences?
    render: markdown
    placeholder: |
      1. Tap entry ...
      2. Do ...
      3. See error
  validations:
    required: true
- type: textarea
  attributes:
    label: Expected Behavior
    description: What should be happening?
    render: markdown
    placeholder: |
      When I do X then Z should happen.
  validations:
    required: true
- type: textarea
  attributes:
    label: Additional context
    description: Anything else you think is pertinent to the bug
    render: markdown
  validations:
    required: false
