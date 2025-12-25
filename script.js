const calendarData2025 = [
  { month: "January", message: "A new year, a new chapter — and you’re my favorite part." },
  { month: "February", message: "Love feels softer and stronger with you." },
  { month: "March", message: "With you, even ordinary days feel special." },
  { month: "April", message: "Your presence makes everything brighter." },
  { month: "May", message: "Grateful for you, always." },
  { month: "June", message: "Halfway through the year, fully in love." },
  { month: "July", message: "Monsoon days feel warmer with you." },
  { month: "August", message: "Every moment with you is worth remembering." },
  { month: "September", message: "You make my heart feel at home." },
  { month: "October", message: "Falling deeper, just like the season." },
  { month: "November", message: "Thankful for your love and patience." },
  { month: "December", message: "Ending the year with love and gratitude." }
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
    const card = document.createElement("div");
    card.className = "flip-card";

    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-front">
          <h3>${item.month}</h3>
        </div>
        <div class="flip-back">
          <p>${item.message}</p>
        </div>
      </div>
    `;

    // Mobile tap support
    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    calendar.appendChild(card);
  });
}

const heartToggle = document.getElementById("heartToggle");
const calendarView = document.getElementById("calendar");
const secondSite = document.getElementById("secondSite");

let showingCalendar = true;

heartToggle.addEventListener("click", () => {
  showingCalendar = !showingCalendar;

  if (showingCalendar) {
    calendarView.classList.remove("hidden");
    secondSite.classList.add("hidden");
  } else {
    calendarView.classList.add("hidden");
    secondSite.classList.remove("hidden");
  }
});


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
        angle: Math.random() * Math.PI * 2,
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

        ctx.fillStyle = `rgba(255, 80, 150, ${p.alpha})`;
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
