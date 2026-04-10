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
    <p>The bar at the top of the screen will show you the rough amount of time remaining.</p>

    <button id="startBtn" onclick="startExam()">Start Exam</button>
  </div>

</div>

{% for q in page.questions %}
  <div class="question-page" data-index="{{ forloop.index0 }}" style="display: none;">
    {% include question.html id=q %}
  </div>
{% endfor %}


<p id="progress"></p>
<div id="nav-buttons" style="display:none;">
  <button id="prevBtn" onclick="prevQuestion()">Previous</button>
  <button id="nextBtn" onclick="nextQuestion()">Next</button>
</div>

<script>
let current = 0;
const pages = document.querySelectorAll(".question-page");

const totalTime = 2*60*60; // 2 hours in seconds
let timeLeft = totalTime;
let timerInterval = null;

function showQuestion(index) {
  pages.forEach(p => p.style.display = "none");
  pages[index].style.display = "block";

  updateProgress(index);
  updateButtons();
}

function startExam() {
  current = 1;
  showQuestion(current);

  document.getElementById("nav-buttons").style.display = "block";

  startTimer();
}

function nextQuestion() {
  if (current < pages.length - 1) {
    current++;
    showQuestion(current);
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    showQuestion(current);
  }
}

function updateButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = current <= 1;
  nextBtn.innerText = current === pages.length - 1 ? "Finish" : "Next";
  }

function startTimer() {
  const bar = document.getElementById("timer-bar");

  timerInterval = setInterval(() => {
    timeLeft--;

    const percent = (timeLeft / totalTime) * 100;
    bar.style.width = percent + "%";

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Time is up!");
    }
  }, 1000);
}

function updateProgress(index) {
  const totalQuestions = pages.length - 1;

  if (index === 0) {
    document.getElementById("progress").innerText = "Instructions";
  } else {
    document.getElementById("progress").innerText =
      `Question ${index} of ${totalQuestions}`;
  }
}

document.addEventListener("click", function(e) {
  const target = e.target.closest(".copy-snippet");
  if (!target) return;

  const text = target.getAttribute("data-copy");

  navigator.clipboard.writeText(text).then(() => {
    target.classList.add("copied");

    setTimeout(() => {
      target.classList.remove("copied");
    }, 1000);
  });
});
</script>
