// Simple FAQ toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqs = document.querySelectorAll(".faq-question");
  faqs.forEach(q => {
    q.addEventListener("click", () => {
      q.nextElementSibling.classList.toggle("active");
    });
  });
});
