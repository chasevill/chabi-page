document.getElementById('envelope').addEventListener('click', function () {
  this.classList.toggle('open');
});
document.getElementById('envelope').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    this.classList.toggle('open');
  }
});
