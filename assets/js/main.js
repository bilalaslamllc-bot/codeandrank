// FAQ toggle effect
document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.addEventListener("mouseover", () => {
      const answer = item.querySelector(".faq-answer");
      if (answer) answer.style.display = "block";
    });
    item.addEventListener("mouseout", () => {
      const answer = item.querySelector(".faq-answer");
      if (answer) answer.style.display = "none";
    });
  });
});
