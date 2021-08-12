name: Feature Request
description: Suggest an idea for this extension
title: "[Feature]: "
labels: ["Type: Enhancement"]
body:
- type: textarea
  attributes:
    label: Why?
    description: What sort of problem would this feature fix?
    placeholder: |
      I expect to see ... when I do ...
      Moods are limited to ...
    render: markdown
  validations:
    required: true
- type: textarea
  attributes:
    label: What?
    description: Clear description of the feature you want to see.
    render: markdown
    placeholder: |
      Add functionality to ...
  validations:
    required: true
