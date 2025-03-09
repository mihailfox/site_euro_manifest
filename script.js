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

  document.querySelectorAll(".footer-links .redir").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const sectionId = this.getAttribute("href").replace("#", "");
      scrollToSection(sectionId);
    });
  });

  document.querySelectorAll(".euro-logo").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  });

  function scrollToSection(sectionId) {
    document
      .getElementById(sectionId)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function copyIBAN() {
    const iban = document.getElementById('iban-text').innerText;
    navigator.clipboard.writeText(iban)
      .then(() => {
        alert("IBAN copiat în clipboard!");
      })
      .catch(err => {
        console.error("Eroare la copierea IBAN-ului: ", err);
      });
  }