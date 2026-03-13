// Set this to your Formspree form URL to get an email when Yes/Of course is clicked (first time only).
// Create a form at https://formspree.io and paste the endpoint here, e.g. https://formspree.io/f/abcxyz
let FORMSPREE_ENDPOINT = 'https://formspree.io/f/mbdzkykn';

let envelope = document.getElementById('envelope');
envelope.addEventListener('click', function () {
  if (this.classList.contains('open')) return;
  this.classList.add('open');
  document.body.classList.add('letter-open');
});

let yippeePopup = document.getElementById('yippeePopup');

function notifyIfFirstTime(choice) {
  if (!FORMSPREE_ENDPOINT) return;
  try {
    if (localStorage.getItem('chabi-page-notified') === '1') return;
    localStorage.setItem('chabi-page-notified', '1');
    fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Someone said ' + choice + ' to your patrick proposal!',
        choice: choice,
        _subject: 'Chabi page: ' + choice + '!'
      })
    });
  } catch (e) {}
}

document.querySelector('.letter-btn--yes').addEventListener('click', function () {
  notifyIfFirstTime('Yes');
  yippeePopup.classList.add('yippee-popup--show');
});

let noBtn = document.querySelector('.letter-btn--no');
noBtn.addEventListener('click', function () {
  noBtn.textContent = 'Of course';
  notifyIfFirstTime('Of course');
  yippeePopup.classList.remove('yippee-popup--show');
  noBtn.offsetHeight;
  yippeePopup.classList.add('yippee-popup--show');
});
