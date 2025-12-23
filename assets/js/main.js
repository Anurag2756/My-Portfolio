// Smooth reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Counter animation
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function startCounters() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 30;

    const update = () => {
      if (count < target) {
        count++;
        counter.innerText = count;
        setTimeout(update, speed);
      }
    };
    update();
  });
}

window.addEventListener("scroll", () => {
  if (!counterStarted && window.scrollY > 300) {
    startCounters();
    counterStarted = true;
  }
});
document.querySelectorAll(".accordion-title").forEach(title => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
/* ===========================
   ACTIVE NAVBAR LINK LOGIC
=========================== */
const navLinks = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  const page = link.getAttribute("href");

  if (page === currentPage) {
    link.classList.add("active");
  }

  /* Handle index.html as root */
  if (currentPage === "" && page === "index.html") {
    link.classList.add("active");
  }
});
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});
const sections = document.querySelectorAll("section[id]");
const sectionLinks = document.querySelectorAll(".section-nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 120;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  sectionLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
const toggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  toggle.setAttribute(
    "aria-expanded",
    navMenu.classList.contains("open")
  );
});
const menuToggle = document.querySelector(".menu-toggle");
 navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Accessibility: update aria-expanded
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", !expanded);
});
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (!email.value.includes("@")) {
      alert("Please enter a valid email address.");
      e.preventDefault();
      return;
    }

    if (message.value.length < 10) {
      alert("Message should be at least 10 characters.");
      e.preventDefault();
    }
  });
}
