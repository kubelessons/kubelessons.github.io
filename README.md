# KubeLessons

## Installation
Installation on Ubuntu as follows.

```bash 
sudo apt update
sudo apt install -y rbenv ruby-build
```

Initialize `rbenv` with
```bash
rbenv init
```

Then restart your shell.

Now install Ruby with
```bash
rbenv install 3.1.4
rbenv global 3.1.4
```

Now use gem to install the bundler.
```bash
gem install bundler
rbenv rehash
```

Then, in the root of this project you can install the bundle with
```bash
bundle install
```

You can now serve the website locally with
```bash
bundle exec jekyll serve
```

Access the site on `localhost:4000`.

## Adding questions to an exam
Adding questions requires two actions. The first action is to add your question definition in `_data/questions.yml`. Define an intuitive title for your question, that starts with the mock-exam name that it is created for, e.g. `ckad1_`, and ends with a descriptive name of what the question is about, e.g. `labels_and_annotations`. The `Text` part should contain the actual mock-exam question text.

The second action is to include your question in the mock-exam. Navigate to `_mock_exams` and select the `.md` file containing the exam you want to add the question to. At the top of the page is a list of questions that are part of this exam, for example:
```yaml
---
title: "CKAD exam 1"
layout: page
questions:
  - ckad1_labels_and_pods
  - ckad1_nodes_and_taints
  - ckad1_deployments_and_autoscaling
---
```
Add your question title from the first action here. That's all there is to it.

## Make copyable text
Wrap the command or text in double `{{}}` and the text will be click-to-copy.

## Markdown in question text
The `questions.yml` question text supports Markdown. 

## Github Actions
The default GitHub Actions workflow is used that is bundled with Chirpy. This builds the website and publishes it to kubelessons.github.io.
