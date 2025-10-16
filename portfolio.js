const menuIcon = document.getElementById('menuBar');
const navLinks = document.getElementById('navBar');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

window.addEventListener('load', () => {
  const popup = document.getElementById('welcomePopup');
  const closeBtn = document.getElementById('closePopup');
  
  popup.classList.add('active');

  closeBtn.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});

// ⬆️ Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

