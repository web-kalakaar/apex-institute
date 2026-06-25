// ============================================
// LOADER
// ============================================
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loader").classList.add("hidden");
  }, 2000);
});

// ============================================
// HAMBURGER / MOBILE NAV
// ============================================
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navOverlay = document.getElementById("navOverlay");

function openNav() {
  hamburger.classList.add("active");
  navMenu.classList.add("open");
  navOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeNav() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("open");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

if (hamburger) {
  hamburger.addEventListener("click", function () {
    if (navMenu.classList.contains("open")) {
      closeNav();
    } else {
      openNav();
    }
  });
}

if (navOverlay) {
  navOverlay.addEventListener("click", closeNav);
}

// Close nav on link click (mobile)
document.querySelectorAll(".nav-menu a").forEach((link) => {
  link.addEventListener("click", closeNav);
});

// ============================================
// NAVIGATION SCROLL EFFECT
// ============================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const sections = document.querySelectorAll("section");

const revealSection = function () {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if (sectionTop < triggerPoint) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealSection);
revealSection();

// ============================================
// ANIMATED COUNTERS
// ============================================
const counters = document.querySelectorAll(".stat-number");
let counterStarted = false;

const animateCounters = function () {
  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-count"));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = function () {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + "+";
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + "+";
      }
    };

    updateCounter();
  });
};

const checkCounterVisibility = function () {
  const aboutSection = document.querySelector(".about");
  if (aboutSection && !counterStarted) {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
      counterStarted = true;
      animateCounters();
    }
  }
};

window.addEventListener("scroll", checkCounterVisibility);
checkCounterVisibility();


// ============================================
// SCROLL TO TOP BUTTON
// ============================================
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ============================================
// SMOOTH SCROLL FOR NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 80;
      const offsetTop = target.offsetTop - navHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  });
});

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================
const buttons = document.querySelectorAll(".btn, .btn-enroll");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: rgba(255,255,255,0.3);
      border-radius: 50%;
      transform: scale(0);
      animation: rippleAnim 0.6s ease-out;
      pointer-events: none;
    `;

    this.style.position = "relative";
    this.style.overflow = "hidden";
    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});

// Ripple keyframes
const style = document.createElement("style");
style.textContent = `
  @keyframes rippleAnim {
    to { transform: scale(2.5); opacity: 0; }
  }
`;
document.head.appendChild(style);
