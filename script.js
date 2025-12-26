const calendarData = [
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
  {
    month: "December",
    message: "🎆 Happy New Year 🎆\nNew beginnings of our life together❤️"
  }
];

const calendar = document.getElementById("calendar");
const bgMusic = document.getElementById("bgMusic");

let activeCard = null;
let musicStarted = false;

calendarData.forEach(item => {
  const card = document.createElement("div");
  card.className = "flip-card";

  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">
        ${item.month}
      </div>
      <div class="flip-back">
        ${item.message.replace(/\n/g, "<br>")}
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    // Start music on first interaction
    if (!musicStarted) {
      bgMusic.play();
      musicStarted = true;
    }

    // Close previously opened card
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove("flipped");
    }

    // Toggle current card
    card.classList.toggle("flipped");
    activeCard = card.classList.contains("flipped") ? card : null;
  });

  calendar.appendChild(card);
});
