document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('openInvitationBtn');
  const content = document.querySelector('.content');
  const target = document.getElementById('openingoneandahalf');

  if (!btn || !content || !target) return;

  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    content.classList.add('show');

    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';

    const docEl = document.documentElement;
    try {
      if (docEl.requestFullscreen) {
        await docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } catch (err) {
    }

    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);
  });
});
