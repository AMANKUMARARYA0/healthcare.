// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form logic
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("cname").value;
    formResponse.innerHTML = `<p>Thank you, <strong>${name}</strong>! Your message has been received. We'll contact you soon.</p>`;
    formResponse.classList.remove("hidden");
    contactForm.reset();
  });
}
