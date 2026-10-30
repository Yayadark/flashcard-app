
const cards = [
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Capital of France?", answer: "Paris" },
  { question: "What is H2O?", answer: "Water" }
];

let current = 0;
let flipped = false;

const flashcard = document.getElementById("flashcard");
const cardText = document.getElementById("cardText");
const progress = document.getElementById("progress");
const nextButton = document.getElementById("nextButton");

function showCard() {
  cardText.textContent = flipped
    ? cards[current].answer
    : cards[current].question;

  progress.textContent = `Card ${current + 1} of ${cards.length}`;
}

flashcard.addEventListener("click", () => {
  flipped = !flipped;
  showCard();
});

nextButton.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  flipped = false;
  showCard();
});

showCard();
