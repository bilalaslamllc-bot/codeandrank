// assets/js/main.js - replacement
document.addEventListener('DOMContentLoaded', function () {
  // Year in footer(s)
  var yearEls = document.querySelectorAll('#year, #year2, #year3');
  var y = new Date().getFullYear();
  yearEls.forEach(function (el) { if (el) el.textContent = y; });

  // Mobile menu toggle
  var mobileBtn = document.querySelector('.mobile-menu');
  var nav = document.querySelector('.nav');
  if (mobileBtn && nav) {
    mobileBtn.addEventListener('click', function () {
      var expanded = mobileBtn.getAttribute('aria-expanded') === 'true';
      mobileBtn.setAttribute('aria-expanded', (!expanded).toString());
      nav.classList.toggle('open');
    });
  }

  // Close mobile nav on resize > 900
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && nav) {
      nav.classList.remove('open');
      if (mobileBtn) mobileBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // FAQ toggle (works for elements with class 'faq-item' or 'faq')
  var faqItems = document.querySelectorAll('.faq-item, .faq');
  faqItems.forEach(function (item) {
    // ensure answer container exists
    var answer = item.querySelector('.answer') || item.querySelector('p');
    item.addEventListener('click', function (e) {
      // avoid toggling when clicking links inside
      if (e.target.tagName.toLowerCase() === 'a') return;
      item.classList.toggle('open');
      // animate height if answer exists
      if (answer) {
        if (item.classList.contains('open')) {
          answer.style.maxHeight = answer.scrollHeight + 20 + 'px';
          answer.style.opacity = 1;
        } else {
          answer.style.maxHeight = null;
          answer.style.opacity = 0;
        }
      }
    });
    // also open on keyboard Enter
    item.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') item.click();
    });
  });
});
