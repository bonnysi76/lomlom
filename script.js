// Hamburger Menu Toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Initialize Typed.js for the typewriter effect in the profile section
const typed = new Typed("#typed", {
  strings: ["Software Developer", "Security and Network Engineer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
});

// Custom Neon Cursor
const cursor = document.querySelector(".custom-cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Optional: Add GSAP hover effects (example for project cards)
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, ease: "power1.out", duration: 0.3 });
  });
  card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, ease: "power1.out", duration: 0.3 });
  });
});
