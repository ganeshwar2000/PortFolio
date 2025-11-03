

const texts = ["Frontend Developer", "UI/UX Developer", "Graphics Designer"];
let textIndex = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < texts[textIndex].length) {
    typingElement.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    // Wait before deleting
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    // Move to next text
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 500);
  }
}

window.onload = typeEffect;

window.addEventListener("load", () => {
    const fills = document.querySelectorAll(".progress-fill");
    fills.forEach(fill => {
      const percent = fill.getAttribute("data-percent");
      fill.style.width = percent + "%";
    });
  });

  


// Optional: make the cards glow dynamically when hovered
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.boxShadow = `
      ${x / 20}px ${y / 20}px 30px rgba(255, 0, 0, 0.6),
      -${x / 20}px -${y / 20}px 20px rgba(255, 0, 0, 0.3)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 20px rgba(255, 0, 0, 0.1)";
  });
});
const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./assests/Ganeshwar_Patra_CV.pdf"; // Replace with your actual CV path
  link.download = "Ganeshwar_Patra_CV.pdf";
  link.click();
});

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const navbar = document.getElementById("navbar");
  burger.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });
});

