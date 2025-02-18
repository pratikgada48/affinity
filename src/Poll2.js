let poll2 = {
  question: "Which food you like to play?",
  answers: ["Pav Bhaji", "Chinese", "Chat Masala", "South Indian"],
  pollCount: 0,
  answersWeight: [0, 0, 0, 0],
  selectedAnswer: -1,
};

let pollDOM2 = {
  question: document.querySelector(".poll2 .question2"),
  answers: document.querySelector(".poll2 .answers2"),
};

pollDOM2.question.innerText = poll2.question;
pollDOM2.answers.innerHTML = poll2.answers
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
  poll2.selectedAnswer = +i;
  poll2.pollCount++;
  poll2.answersWeight[i]++;
  try {
    document
      .querySelector(".poll2 .answers2 .answer.selected")
      .classList.remove("selected");
  } catch (msg) {}
  document
    .querySelectorAll(".poll2 .answers2 .answer")
    [+i].classList.add("selected");
  showResults();
}

function showResults() {
  let answers = document.querySelectorAll(".poll2 .answers2 .answer");
  for (let i = 0; i < answers.length; i++) {
    let percentage = 0;
    percentage = Math.round((poll2.answersWeight[i] * 100) / poll2.pollCount);
    answers[i].querySelector(".percentage-bar").style.width = percentage + "%";
    answers[i].querySelector(".percentage-value").innerText = percentage + "%";
  }
}
