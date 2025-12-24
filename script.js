const months2025 = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December"
];

function startSite() {
  document.getElementById("landing").classList.add("hidden");
  document.getElementById("main").classList.remove("hidden");

  document.getElementById("bgMusic").play();

  checkDate();
}

function checkDate() {
  const now = new Date();
  const yearTitle = document.getElementById("yearTitle");
  const calendar = document.getElementById("calendar");
  const message = document.getElementById("specialMessage");

  calendar.innerHTML = "";

  if (now >= new Date("2026-01-01T00:00:00")) {
    yearTitle.innerText = "1st January 2026 💙";

    message.innerHTML = `
      Happy New Year, My Love ❤️<br>
      2025 was beautiful because of you,<br>
      and 2026 will be even better — together.
    `;
    message.classList.remove("hidden");

  } else {
    yearTitle.innerText = "Our 2025 Together 💙";

    months2025.forEach(month => {
      const div = document.createElement("div");
      div.className = "month";
      div.innerHTML = `<h3>${month}</h3><p>More memories with you ✨</p>`;
      calendar.appendChild(div);
    });
  }
}
