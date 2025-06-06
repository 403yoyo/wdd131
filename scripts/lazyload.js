document.addEventListener('DOMContentLoaded', () => {
  const lastModifiedSpan = document.getElementById('lastmodified');
  lastModifiedSpan.textContent = document.lastModified;
});
