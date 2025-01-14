function showCustomAlert() {
  document.querySelector('.custom-alert').style.display = 'flex';
  document.body.classList.add('custom-alert-active');
}


function closeCustomAlert() {
  document.querySelector('.custom-alert').style.display = 'none';
  document.body.classList.remove('custom-alert-active');
}
