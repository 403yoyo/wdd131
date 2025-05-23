const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  menuButton.classList.toggle('open');
});

// Footer year and last modified date
const yearSpan = document.querySelector('#year');
const lastModifiedSpan = document.querySelector('#lastModified');

const now = new Date();
yearSpan.textContent = now.getFullYear();
lastModifiedSpan.textContent = document.lastModified;
