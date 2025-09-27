// ====== Main JS for CodeAndRank ======

// Dynamic year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpans = document.querySelectorAll("[id^='year']");
  yearSpans.forEach(span => {
    span.textContent = new Date().getFullYear();
  });

  // FAQ toggle
  const questions = document.querySelectorAll(".qa-item .qa-q");
  questions.forEach(btn => {
    btn.addEventListener("click", () => {
      const answer = btn.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
