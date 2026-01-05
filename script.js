const navbar = document.getElementById('navbar');
  const homeSection = document.getElementById('home');

  window.addEventListener('scroll', () => {
    const homeHeight = homeSection.offsetHeight;
    if (window.scrollY > 50) { // thoda scroll hone par
      navbar.classList.add('scrolled');
      navbar.classList.remove('bg-transparent');
    } else {
      navbar.classList.remove('scrolled');
      navbar.classList.add('bg-transparent');
    }
  });
