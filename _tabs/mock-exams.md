---
title: Mock Exams
layout: page
icon: fas fa-graduation-cap
order: 3
---

## Available Exams

<ul>
{% for exam in site.mock_exams %}
  <li>
    <a href="{{ exam.url }}">{{ exam.title }}</a>
  </li>
{% endfor %}
</ul>