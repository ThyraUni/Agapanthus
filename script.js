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

const countdownDate = new Date("2026-02-05T00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days.toString().padStart(2, '0');
  document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(x);
    document.querySelector(".countdownbox").innerHTML = "<p>Waktu telah tiba!</p>";
  }
}, 1000);

const btnCashless = document.querySelector('.cashless');
const btnKado = document.querySelector('.kado');

const divCashless = document.querySelector('.cashless-div');
const divKado = document.querySelector('.kirimkado');

btnCashless.addEventListener('click', () => {
  divCashless.classList.add('show');
  divKado.classList.remove('show');
});

btnKado.addEventListener('click', () => {
  divCashless.classList.remove('show');
  divKado.classList.add('show');
});

const salinButtons = document.querySelectorAll('.salin');

salinButtons.forEach(button => {
  button.addEventListener('click', () => {
    let textToCopy = '';

    if (button.closest('.cashless-div')) {
      textToCopy = button.closest('.ket').querySelector('h3').innerText;
    } else if (button.closest('.kirimkado')) {
      textToCopy = button.closest('.kirimkado').querySelector('p').innerText;
    }

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        const originalText = button.innerText;
        button.innerText = 'Tersalin!';
        setTimeout(() => {
          button.innerText = originalText;
        }, 1500);
      })
      .catch(err => {
        console.error('Gagal menyalin teks:', err);
      });
  });
});


