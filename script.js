document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const projectCards = document.querySelectorAll(".card");

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.boxShadow = "0 24px 60px rgba(56, 189, 248, 0.12)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.boxShadow = "none";
    });
  });
});
