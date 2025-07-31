// ===== Custom Cursor & Reticle =====
const cursor = document.querySelector('.custom-cursor');
const reticle = document.querySelector('.center-reticle');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  cursor.style.transform = `translate(-50%, -50%) rotate(45deg)`;

  reticle.style.left = `${e.clientX}px`;
  reticle.style.top = `${e.clientY}px`;
  reticle.style.transform = `translate(-50%, -50%)`;
});

// ===== Hover Color Change =====
const interactiveElements = document.querySelectorAll('.skill-card, .project-link, nav a');
interactiveElements.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.borderColor = 'red';
    reticle.style.borderColor = 'red';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.borderColor = '#00ff00';
    reticle.style.borderColor = '#00ff00';
  });
});

// ===== Animate Sections on Scroll =====
let typingStarted = false; // track typing status
const sections = document.querySelectorAll('section.slide-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      if (entry.target.id === 'home' && !typingStarted) {
        typingStarted = true;
        typeChunk();
      }

      if (entry.target.id === 'skills') {
        startSlideshow();
      }
    } else {
      if (entry.target.id === 'skills') {
        stopSlideshow();
      }
    }
  });
}, { threshold: 0.25 });
sections.forEach(section => observer.observe(section));

// ===== Back to Top Button =====
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'back-to-top';
document.body.appendChild(backToTop);

backToTop.style.display = 'none';
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

// ===== Mobile Navigation Menu Toggle =====
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('nav.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
document.querySelectorAll('nav.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

// ===== Typing Effect =====
const typingElement = document.getElementById('typing');
const typingText = `WELCOME TO MY PORTFOLIO  ฅ^•ﻌ•^ฅ
This page is inspired by: [Ace Combat 7: Skies Unknown]
The maker of this website is Tu Shi Feng
Institution currently in: Sunway University
STUDENT ID: 23103104
Current course : Bachelors In Software Engineering`;

let charIndex = 0;
const chunkSize = 4; // Number of characters to type at once
const typingSpeed = 20; // Delay in ms between chunks

function typeChunk() {
  if (charIndex < typingText.length) {
    typingElement.textContent += typingText.substr(charIndex, chunkSize);
    charIndex += chunkSize;
    setTimeout(typeChunk, typingSpeed);
  }
}

// ===== Slideshow for Skills Tab (with fade & visibility control) =====
const skillImages = [
  "images/javascript.png",
  "images/python.jpeg",
  "images/java.png"
];

let skillIndex = 0;
let slideshowInterval = null;
const skillImgElement = document.querySelector("#skills .section-image img");

// Add smooth fade via CSS
skillImgElement.style.transition = "opacity 0.5s ease-in-out";

function startSlideshow() {
  if (slideshowInterval) return; // already running
  slideshowInterval = setInterval(() => {
    skillImgElement.style.opacity = 0;
    setTimeout(() => {
      skillIndex = (skillIndex + 1) % skillImages.length;
      skillImgElement.src = skillImages[skillIndex];
      skillImgElement.style.opacity = 1;
    }, 500);
  }, 3000);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshowInterval = null;
}
