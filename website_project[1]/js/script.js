// Menu toggle for small screens
document.querySelectorAll('.menu-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const navLinks = btn.parentElement.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  });
});

// Simple slider
(function () {
  const slides = document.querySelectorAll('.slide');
  let index = 0;
  const show = i => {
    slides.forEach(s => s.classList.remove('active'));
    slides[i].classList.add('active');
  };
  document.getElementById('next')?.addEventListener('click', () => {
    index = (index + 1) % slides.length;
    show(index);
  });
  document.getElementById('prev')?.addEventListener('click', () => {
    index = (index - 1 + slides.length) % slides.length;
    show(index);
  });
  // Auto-play every 4s
  setInterval(() => {
    index = (index + 1) % slides.length;
    show(index);
  }, 4000);
})();

// Form validation
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');
  const status = document.getElementById('formMessage');

  // simple checks
  if (!name.value || name.value.length < 2) {
    status.textContent = 'Please enter your name (2+ chars).';
    name.focus();
    return;
  }
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRe.test(email.value)) {
    status.textContent = 'Please enter a valid email.';
    email.focus();
    return;
  }
  if (!message.value || message.value.length < 10) {
    status.textContent = 'Message is too short (10+ chars).';
    message.focus();
    return;
  }

  // if all good
  status.textContent = 'Thanks! Your message was sent (demo).';
  // Reset form after successful demo submission
  setTimeout(() => {
    this.reset();
    status.textContent = '';
  }, 2000);
});
