const cursor = document.querySelector('.custom-cursor');
const reticle = document.querySelector('.center-reticle');
const panels = document.querySelectorAll('.side-box');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x - 17}px`;
  cursor.style.top = `${y - 17}px`;

  reticle.style.left = `${x}px`;
  reticle.style.top = `${y}px`;
});

// Cursor + reticle hover effect
panels.forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    cursor.style.borderColor = 'red';
    reticle.style.borderColor = 'red';
    reticle.style.animation = 'rotateReticleFast 1s linear infinite';
  });
  panel.addEventListener('mouseleave', () => {
    cursor.style.borderColor = '#00ff00';
    reticle.style.borderColor = '#00ff00';
    reticle.style.animation = 'rotateReticle 5s linear infinite';
  });
});


//side menu button section
const menuToggle = document.getElementById('menuToggle');
const sidePanel = document.querySelector('.side-panel');

menuToggle.addEventListener('click', () => {
  sidePanel.classList.toggle('active');
});

//animation for side panels
window.addEventListener('load', () => {
  document.querySelector('.side-panel').classList.add('animate-in');
});
