document.addEventListener('DOMContentLoaded', function () {
  const popup = document.getElementById('cookie-popup');
  const acceptBtn = document.getElementById('accept-cookies');

  const hasAccepted = localStorage.getItem('cookiesAccepted');

  if (!hasAccepted) {
      popup.style.display = 'block';
  }

  acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookiesAccepted', 'yes');
      popup.style.display = 'none';
  });
});
