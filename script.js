  const cursor = document.querySelector('.custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px) rotate(45deg)`;
  });