document.addEventListener("DOMContentLoaded", () => {
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

document.getElementById("startBtn").addEventListener("click", startExam);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("prevBtn").addEventListener("click", prevQuestion);
})