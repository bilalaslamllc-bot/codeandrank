// Toggle FAQs open/close
document.querySelectorAll(".faq h3").forEach((faqHeader) => {
  faqHeader.addEventListener("click", () => {
    faqHeader.nextElementSibling.classList.toggle("show");
  });
});
