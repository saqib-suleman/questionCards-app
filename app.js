const questionsEl = document.querySelectorAll(".question");

questionsEl.forEach((question) => {
  const btn = question.querySelector(".question-btn");

  btn.addEventListener("click", () => {
    questionsEl.forEach((q) => {
      if (q !== question) {
        q.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
