// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// Set active link based on current page
function setActiveLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

setActiveLink();

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("fullname").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      alert("Please fill in all fields");
      return;
    }

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyRgAmdxeMaK_JPPbzeZRaazChlppYxYBzL08QT-bK3PIWXCzLNojfGm5WK980pz0OY/exec";

    try {
      await fetch(scriptURL, {
        method: "POST",
        mode: "no-cors", // 🔥 IMPORTANT
        body: JSON.stringify({ name, email, message }),
      });

      // If fetch doesn't throw → data WAS sent
      alert("Message sent successfully!");
      contactForm.reset();

    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to send message. Please try again.");
    }
  });
}



// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
