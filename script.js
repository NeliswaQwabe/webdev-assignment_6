// ===============================
// Custom Form Validation
// ===============================
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let valid = true;

  // Clear messages
  ["nameError", "emailError", "messageError", "formSuccess"].forEach(id => {
    document.getElementById(id).innerText = "";
  });

  // Validate Name
  const name = document.getElementById("name").value.trim();
  if (name.length < 3) {
    document.getElementById("nameError").innerText = "Name must be at least 3 characters.";
    valid = false;
  }

  // Validate Email
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").innerText = "Enter a valid email address.";
    valid = false;
  }

  // Validate Message
  const message = document.getElementById("message").value.trim();
  if (message.length < 10) {
    document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
    valid = false;
  }

  if (valid) {
    document.getElementById("formSuccess").innerText = "Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

// ===============================
// Counter Game
// ===============================
let count = 0;
const countValue = document.getElementById("countValue");

document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  countValue.innerText = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  countValue.innerText = count;
});
document.getElementById("resetBtn").addEventListener("click", () => {
  count = 0;
  countValue.innerText = count;
});

// ===============================
// Theme Toggle
// ===============================
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeBtn.innerText = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// ===============================
// Dropdown Menu
// ===============================
const menuBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

menuBtn.addEventListener("click", () => {
  dropdownMenu.classList.toggle("hidden");
});

// ===============================
// Collapsible FAQ
// ===============================
document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// ===============================
// Tabbed Interface
// ===============================
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Reset all tabs
    tabButtons.forEach(btn => btn.classList.remove("active"));
    tabPanels.forEach(panel => panel.classList.remove("active"));

    // Activate current tab
    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});
