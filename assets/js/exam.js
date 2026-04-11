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

  document.getElementById("exam-intro").style.display = "none";
  document.getElementById("exam-ui").style.display = "block";

  startTimer();
}

function updateButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.disabled = current <= 1;
  nextBtn.innerText = current === pages.length - 1 ? "Finish" : "Next";
  }

const questionList = document.getElementById("question-list");
const totalSpan = document.getElementById("total");
const currentSpan = document.getElementById("current");

const totalQuestions = pages.length - 1;

totalSpan.innerText = totalQuestions;

for (let i = 1; i <= totalQuestions; i++) {
  const btn = document.createElement("div");
  btn.className = "q-number";
  btn.innerText = i;

  btn.addEventListener("click", () => {
    current = i;
    showQuestion(current);
  });

  questionList.appendChild(btn);
}

function showQuestion(index) {
  pages.forEach(p => p.style.display = "none");
  pages[index].style.display = "block";

  currentSpan.innerText = index;

  const numbers = document.querySelectorAll(".q-number");

  numbers.forEach((el, i) => {
    el.classList.toggle("active", i === index - 1);
  });

  const active = document.querySelector(".q-number.active");
  if (active) {
    active.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  }
}

document.getElementById("prevArrow").addEventListener("click", () => {
  if (current > 1) {
    current--;
    showQuestion(current);
  }
});

document.getElementById("nextArrow").addEventListener("click", () => {
  if (current < pages.length - 1) {
    current++;
    showQuestion(current);
  }
});

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
})