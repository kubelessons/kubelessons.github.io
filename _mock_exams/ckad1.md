---
title: "CKAD exam 1"
layout: page
questions:
  - q1
  - q2
---

{% for q in page.questions %}
  {% include question.html id=q %}
{% endfor %}