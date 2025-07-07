window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
