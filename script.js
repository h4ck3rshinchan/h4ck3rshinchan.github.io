const button = document.querySelector('.special-btn');

const handleInteraction = (e) => {
  const count = 8;
  const point = e.touches ? e.touches[0] : e;

  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'butterfly';
    b.textContent = '🦋';

    const x = (Math.random() - 0.5) * 160;
    const y = (Math.random() - 0.7) * 180;

    b.style.left = `${point.clientX}px`;
    b.style.top = `${point.clientY}px`;
    b.style.setProperty('--x', `${x}px`);
    b.style.setProperty('--y', `${y}px`);

    document.body.appendChild(b);
    setTimeout(() => b.remove(), 1200);
  }

  setTimeout(() => {
    window.location.href = 'for-you.html';
  }, 1200);
};

button.addEventListener('click', handleInteraction);
button.addEventListener('touchstart', handleInteraction);



function createSnow() {
  const snow = document.createElement('div');
  snow.className = 'snow';
  snow.textContent = '❄';

  snow.style.left = Math.random() * window.innerWidth + 'px';
  snow.style.animationDuration = 6 + Math.random() * 6 + 's';

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 12000);
}

setInterval(createSnow, 300);
