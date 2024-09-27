// js/darkmode.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
  
    // Verificar si ya se ha almacenado la preferencia del tema en localStorage
    const currentTheme = localStorage.getItem('theme');
  
    if (currentTheme === 'dark') {
      document.body.classList.add('dark-mode');
      themeIcon.textContent = '☀️'; // Icono de sol para modo claro
    } else {
      themeIcon.textContent = '🌙'; // Icono de luna para modo oscuro
    }
  
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
  
      if (document.body.classList.contains('dark-mode')) {
        themeIcon.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        themeIcon.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });
  });
  