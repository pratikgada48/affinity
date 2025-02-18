let poll = {
  question: "Which sport you like to play?",
  answers: ["Cricket", "Football", "Hockey", "Batminton"],
  pollCount: 0,
  answersWeight: [0, 0, 0, 0],
  selectedAnswer: -1,
};

let pollDOM = {
  question: document.querySelector(".poll .question"),
  answers: document.querySelector(".poll .answers"),
};

pollDOM.question.innerText = poll.question;
pollDOM.answers.innerHTML = poll.answers
  .map(function (answer, i) {
    return `<div class="answer" onclick="markAnswer('${i}')">
      ${answer}
      <span class="percentage-bar"></span>
      <span class="percentage-value"></span>
    </div>
    `;
  })
  .join("");

function markAnswer(i) {
  poll.selectedAnswer = +i;
  poll.pollCount++;
  poll.answersWeight[i]++;
  try {
    document
      .querySelector(".poll .answers .answer.selected")
      .classList.remove("selected");
  } catch (msg) {}
  document
    .querySelectorAll(".poll .answers .answer")
    [+i].classList.add("selected");
  showResults();
}

function showResults() {
  let answers = document.querySelectorAll(".poll .answers .answer");
  for (let i = 0; i < answers.length; i++) {
    let percentage = 0;
    percentage = Math.round((poll.answersWeight[i] * 100) / poll.pollCount);
    answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
    answers[i].querySelector(".percentage-value").innerText = percentage + "%";
  }
}
