const calendarData2025 = [
  { month: "January", message: "A new year, a new chapter — and you’re my favorite part.", highlight: "Our year begins together 💙" },
  { month: "February", message: "Love feels softer and stronger with you.", highlight: "Month of us ❤️" },
  { month: "March", message: "With you, even ordinary days feel special.", highlight: "Growing closer every day" },
  { month: "April", message: "Your presence makes everything brighter.", highlight: "Smiles, warmth, and memories" },
  { month: "May", message: "Grateful for you, always.", highlight: "Holding hands through life" },
  { month: "June", message: "Halfway through the year, fully in love.", highlight: "You are my constant" },
  { month: "July", message: "Monsoon days feel warmer with you.", highlight: "Comfort and calm" },
  { month: "August", message: "Every moment with you is worth remembering.", highlight: "Laughs and late talks" },
  { month: "September", message: "You make my heart feel at home.", highlight: "Peace with you" },
  { month: "October", message: "Falling deeper, just like the season.", highlight: "Endless affection" },
  { month: "November", message: "Thankful for your love and patience.", highlight: "Grateful heart 🤍" },
  { month: "December", message: "A year well lived — because of you.", highlight: "Ending 2025 with love" }
];

function startSite() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");
  document.getElementById("bgMusic").play();
  renderCalendar();
}

function renderCalendar() {
  const now = new Date();
  const calendar = document.getElementById("calendar");
  const yearTitle = document.getElementById("yearTitle");
  const specialMessage = document.getElementById("specialMessage");

  calendar.innerHTML = "";

  if (now >= new Date("2026-01-01T00:00:00")) {
    yearTitle.innerText = "🎆 1st January 2026 🎆";

    specialMessage.innerHTML = `
      Happy New Year 🎆<br>
      New beginnings of our life together ❤️
    `;
    specialMessage.classList.remove("hidden");

    startFireworks();
    return;
  }

  yearTitle.innerText = "Our 2025 Together 💙";

  calendarData2025.forEach(item => {
    const monthCard = document.createElement("div");
    monthCard.className = "month";

    monthCard.innerHTML = `
      <h3>${item.month}</h3>
      <div class="popup">
        <p>${item.message}</p>
        <span>${item.highlight}</span>
      </div>
    `;

    monthCard.addEventListener("click", e => {
      e.stopPropagation();
      closeAllPopups();
      monthCard.classList.toggle("active");
    });

    calendar.appendChild(monthCard);
  });

  document.body.addEventListener("click", closeAllPopups);
}

function closeAllPopups() {
  document.querySelectorAll(".month.active").forEach(m => m.classList.remove("active"));
}

/* ================= FIREWORKS ================= */

function startFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fireworks = [];

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const particles = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x,
        y,
        angle: Math.random() * 2 * Math.PI,
        speed: Math.random() * 4 + 2,
        alpha: 1
      });
    }
    fireworks.push(particles);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    fireworks.forEach((particles, index) => {
      particles.forEach(p => {
        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;
        p.alpha -= 0.02;

        ctx.fillStyle = `rgba(255, 100, 150, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      if (particles[0].alpha <= 0) fireworks.splice(index, 1);
    });

    if (Math.random() < 0.05) createFirework();
    requestAnimationFrame(animate);
  }

  animate();
}
