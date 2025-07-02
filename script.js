<script>
// 🔁 Animated Typewriter (Looping Phrases)
const phrases = [
  "Innovate. Dominate. IndoThon.",
  "Revolutionizing Hackathons...",
  "Think Big. Build Smart. Win Loud.",
  "Future Begins Here. IndoThon."
];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopTypewriter() {
  const typewriter = document.getElementById("typewriter");
  if (!typewriter) return;

  typewriter.innerHTML = currentPhrase.join("");

  if (!isDeleting && j <= phrases[i].length) {
    currentPhrase.push(phrases[i][j]);
    j++;
  }

  if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) {
    isDeleting = true;
    setTimeout(loopTypewriter, 1500);
    return;
  }

  if (isDeleting && j === 0) {
    currentPhrase = [];
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  const speed = isDeleting ? 40 : 100;
  setTimeout(loopTypewriter, speed);
}
document.addEventListener("DOMContentLoaded", loopTypewriter);

// ⏳ Countdown Timer
const timer = document.getElementById("timer");
const countdownDate = new Date("Aug 15, 2025 09:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    timer.innerHTML = "🎉 IndoThon Started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}D : ${hours}H : ${minutes}M : ${seconds}S`;
}, 1000);

// 🌗 Dark Mode Toggle
const toggleBtn = document.getElementById('darkToggle');
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('section, nav, header, footer').forEach(el => {
      el.classList.toggle('dark-mode');
    });
    toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
  });
}

// ❓ FAQ Toggle
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// 🌌 Starry Galaxy Background Animation (Optional)
const canvas = document.getElementById("galaxy");
if (canvas) {
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2,
      alpha: Math.random()
    });
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
      ctx.fill();
    }
  }
  setInterval(drawStars, 50);
}

// 📬 Google Sheets Form Submission
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const sheetURL = "https://script.google.com/macros/s/AKfycbxjAJlg1ruVFHAvj0KT7x4rjQNDoHyEl2QtnkAjXr4TgorL22sfqJbnyAJhNpDgrNIO/exec"; // Replace with actual Apps Script URL

    fetch(sheetURL, {
      method: "POST",
      body: data
    })
    .then(res => {
      alert("✅ Successfully submitted!");
      form.reset();
    })
    .catch(err => {
      alert("❌ Submission failed.");
      console.error(err);
    });
  });
}
</script>
