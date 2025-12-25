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

setInterval(createSnow, 350);

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


/* ---------- Contact click pulse ---------- */
const contact = document.querySelector('.contact-block');

contact.addEventListener('click', () => {
  contact.classList.add('clicked');

  setTimeout(() => {
    contact.classList.remove('clicked');
  }, 600);
});





/* ---------- Redirect actions ---------- */

const songBox = document.querySelector('.song-box');
const feedbackBox = document.querySelector('.feedback-box');
const oldSiteBox = document.querySelector('.oldsite-box');

songBox.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'pages/songs.html';
  }, 200);
});

feedbackBox.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'pages/feedback.html';
  }, 200);
});

oldSiteBox.addEventListener('click', () => {
  setTimeout(() => {
    window.location.href = 'pages/old-site.html';
  }, 200);
});






