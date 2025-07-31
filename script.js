const cursor = document.querySelector('.custom-cursor');
const reticle = document.querySelector('.center-reticle');

//custom cursor sector
document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.left = `${x - 17}px`;
  cursor.style.top = `${y - 17}px`;
  reticle.style.left = `${x}px`;
  reticle.style.top = `${y}px`;
});

//for color change when the reticle/ cursor hovers on the side panel or the dic boxes.
document.querySelectorAll('.side-box').forEach(panel => {
  panel.addEventListener('mouseenter', () => {
    cursor.style.borderColor = 'red';
    reticle.style.borderColor = 'red';
    reticle.style.animation = 'rotateReticleFast 1s linear infinite';
  });
  panel.addEventListener('mouseleave', () => {
    cursor.style.borderColor = '#00ff00';
    reticle.style.borderColor = '#00ff00';
    reticle.style.animation = 'none';
  });
});

//side panel animation when the apge gets loaded
window.addEventListener('load', () => {
  document.querySelector('.side-panel').classList.add('animate-in');
});

//mobile toggle
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.side-panel').classList.toggle('active');
});

//back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
