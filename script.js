document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('openInvitationBtn');
  const content = document.querySelector('.content');
  const target = document.getElementById('openingoneandahalf');
  const audio = document.getElementById('audio');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const iconPlay = document.getElementById('icon-play');
  const iconPause = document.getElementById('icon-pause');

  if (!btn || !content || !target || !audio || !playPauseBtn) return;

  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    content.classList.add('show');

    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';

    try {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) await docEl.requestFullscreen();
      else if (docEl.webkitRequestFullscreen) docEl.webkitRequestFullscreen();
      else if (docEl.msRequestFullscreen) docEl.msRequestFullscreen();
    } catch (err) { }

    setTimeout(() => {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 120);

    audio.play().then(() => {
      iconPlay.style.display = 'none';
      iconPause.style.display = 'inline';
    }).catch(err => console.error('Gagal memutar audio', err));
  });

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().then(() => {
        iconPlay.style.display = 'none';
        iconPause.style.display = 'inline';
      }).catch(err => console.error('Gagal memutar audio', err));
    } else {
      audio.pause();
      iconPlay.style.display = 'inline';
      iconPause.style.display = 'none';
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      audio.pause();
      iconPlay.style.display = 'inline';
      iconPause.style.display = 'none';
    }
  });
});
