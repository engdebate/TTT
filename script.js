const answerButton = document.getElementById("answer-button");
const quizText = document.getElementById("quiz-text");

answerButton.addEventListener("click", () => {
  quizText.innerHTML = "答案是 <strong>index.html</strong>。GitHub Pages 會把它當成網站首頁。";
  answerButton.textContent = "已顯示答案";
});
