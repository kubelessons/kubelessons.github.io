---
title: "CKAD exam 1"
layout: page
questions:
  - ckad1_labels_and_pods
  - ckad1_nodes_and_taints
  - ckad1_deployments_and_autoscaling
---
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div id="timer-container" style="display:block; width:100%; height:10px; background:#eee; margin-bottom:20px;">
  <div id="timer-bar" style="height:100%; width:100%; background:#4caf50; transition:width 1s linear;"></div>
</div>

<div id="exam-container">

  <div class="question-page intro-page" data-index="0">
    <h2>CKAD Exam Instructions</h2>
    <p>Before starting the exam, you must have a working MiniKube cluster. You must be able to add MiniKube nodes.</p>
    <p>Read all questions carefully.</p>
    <p>You can navigate through questions using the Next/Previous buttons.</p>
    <p>The bar at the top of the screen will show you the rough amount of time remaining. Total time is 2 hours.</p>

    <button id="startBtn">Start Exam</button>
  </div>

</div>

{% for q in page.questions %}
  <div class="question-page" data-index="{{ forloop.index0 }}" style="display: none;">
    {% include question.html id=q %}
  </div>
{% endfor %}


<p id="progress"></p>
<div id="nav-buttons" style="display:none;">
  <button id="prevBtn">Previous</button>
  <button id="nextBtn">Next</button>
</div>

{% include exam-scripts.html %}
