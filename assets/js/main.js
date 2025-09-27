// FAQ toggle
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");
  questions.forEach(q => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("active");
    });
  });
});
