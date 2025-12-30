const calendarData = [
  { month: "January", message: "The month I finally discovered my real world—my existence felt complete beside you." },
  { month: "February", message: "My first-ever Valentine’s Day with the love of my life, a memory I will cherish forever." },
  { month: "March", message: "Chaotic, fun, and full of stolen moments—hiding our love from the world while growing stronger together." },
  { month: "April", message: "Facing storms and fights, choosing each other, and standing together no matter the situation." },
  { month: "May", message: "Learning patience, trust, and understanding—building a deeper bond day by day." },
  { month: "June", message: "Cheering for each other through everything, staying loyal, loving, and strong as a couple always should." },
  { month: "July", message: "Soft sunsets and rainy days felt warmer and more beautiful with you by my side." },
  { month: "August", message: "Festive days, prayers together, and hopes for a better future we are building hand in hand." },
  { month: "September", message: "Feeling truly blessed to have you around me, always and in every way." },
  { month: "October", message: "Pure happiness—our love accepted, surrounded by family blessings and beautiful moments together." },
  { month: "November", message: "Your birthday month and those official vibes—celebrating you and us with so much love." },
  {
    month: "December",
    message:
      "Finding peace in knowing you are mine and I am yours, now and forever. ❤️\n\n🎆 Happy New Year 🎆\nNew beginnings of our life together ❤️"
  }
];

const calendar = document.getElementById("calendar");
const bgMusic = document.getElementById("bgMusic");
const fireworksContainer = document.getElementById("fireworks");

let activeCard = null;
let musicStarted = false;

function launchFireworks() {
  for (let i = 0; i < 25; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";

    fw.style.left = Math.random() * 100 + "vw";
    fw.style.top = Math.random() * 100 + "vh";
    fw.style.background =
      `hsl(${Math.random() * 360}, 80%, 60%)`;

    fireworksContainer.appendChild(fw);

    setTimeout(() => fw.remove(), 1200);
  }
}

calendarData.forEach((item, index) => {
  const card = document.createElement("div");
  card.className = "flip-card";

  const lightness = 85 - index * 4;
  card.style.setProperty(
    "--card-blue",
    `hsl(210, 70%, ${lightness}%)`
  );

  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">${item.month}</div>
      <div class="flip-back">${item.message.replace(/\n/g, "<br>")}</div>
    </div>
  `;

  card.addEventListener("click", () => {
  startMusic();

  if (activeCard && activeCard !== card) {
    activeCard.classList.remove("flipped");
  }

  card.classList.toggle("flipped");
  activeCard = card.classList.contains("flipped") ? card : null;

  if (item.month === "December") {
    launchFireworks();
  }
});


    // 🎆 Fireworks ONLY for December
    if (item.month === "December") {
     function launchFireworks() {
  for (let i = 0; i < 40; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    fw.style.left = x + "px";
    fw.style.top = y + "px";

    fw.style.background = `hsl(${Math.random() * 360}, 90%, 60%)`;

    fireworksContainer.appendChild(fw);

    setTimeout(() => fw.remove(), 1500);
  }
}
    }
  });

  calendar.appendChild(card);
});



