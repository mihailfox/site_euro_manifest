document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const answer = faqItem.querySelector('.faq-answer');
      const icon = button.querySelector('svg');
  
      // Toggle hidden
      answer.classList.toggle('hidden');
  
      // Rotește/transformă icon (ex. plus -> minus)
      icon.classList.toggle('rotate-45');
    });
  });

  document.querySelectorAll(".nav-menu li a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").replace("#", "");
      scrollToSection(sectionId);
    });
  });

  document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").replace("#", "");
      scrollToSection(sectionId);
    });
  });

  document.querySelectorAll(".footer-links a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").replace("#", "");
      scrollToSection(sectionId);
    });
  });

  document.querySelectorAll(".euro-logo").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      scrollToSection('header-logo');
    });
  });

  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }