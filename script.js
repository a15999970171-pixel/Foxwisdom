// Replace this with the real Creem checkout URL before launch.
const CREEM_CHECKOUT_URL = "PASTE_YOUR_CREEM_CHECKOUT_URL_HERE";

const buttons = document.querySelectorAll('[data-checkout]');
buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (CREEM_CHECKOUT_URL.startsWith('http')) {
      event.preventDefault();
      window.location.href = CREEM_CHECKOUT_URL;
      return;
    }
    event.preventDefault();
    alert('Add your live Creem checkout URL in script.js before publishing.');
  });
});

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
if (menu) {
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') === 'true';
    menu.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('open', !open);
  });
}
