const envelope = document.getElementById('envelope');
const envelopeScreen = document.getElementById('envelope-screen');
const siteContent = document.getElementById('site-content');

envelope.addEventListener('click', () => {
  envelope.classList.add('open');

  // espera animação
  setTimeout(() => {
    envelopeScreen.style.opacity = '0';

    setTimeout(() => {
      envelopeScreen.style.display = 'none';
      siteContent.classList.remove('hidden');
    }, 600);

  }, 600);
});