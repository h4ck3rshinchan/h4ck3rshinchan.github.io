// Add dynamic confetti effect
const confettiContainer = document.querySelector('.confetti');

for (let i = 0; i < 50; i++) {
  const confetti = document.createElement('div');
  confetti.className = 'confetti-piece';
  confetti.style.left = `${Math.random() * 100}%`;
  confetti.style.animationDelay = `${Math.random() * 2}s`;
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
  confettiContainer.appendChild(confetti);
}