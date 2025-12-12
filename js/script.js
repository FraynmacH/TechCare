// Mobile menu toggle
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.innerHTML = navLinks.classList.contains("active")
    ? '<i class="fas fa-times"></i>'
    : '<i class="fas fa-bars"></i>';
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Update active link
      document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    }
  });
});

// Email validation in real-time
const emailInput = document.querySelector('input[type="email"]');
const emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function () {
  validateEmail();
});

emailInput.addEventListener("blur", function () {
  validateEmail();
});

function validateEmail() {
  const emailValue = emailInput.value;
  const isValid = emailValue.includes("@") && emailValue.includes(".");

  if (emailValue && !isValid) {
    emailError.style.display = "block";
    emailInput.style.borderColor = "#ff5252";
    return false;
  } else {
    emailError.style.display = "none";
    emailInput.style.borderColor = "rgba(255, 255, 255, 0.1)";
    return true;
  }
}

// Form validation on submit
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Validate email before submit
    if (!validateEmail()) {
      return;
    }

    // Form submission success
    alert("Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.");
    this.reset();
  });
}

// Add scroll event for navigation highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let currentSection = "";

  const scrollPosition = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === currentSection) {
      link.classList.add("active");
    }
  });
});

// Initialize year in copyright
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const copyrightElements = document.querySelectorAll(".copyright p");

  copyrightElements.forEach((element) => {
    element.innerHTML = element.innerHTML.replace("2025", currentYear);
  });
});
