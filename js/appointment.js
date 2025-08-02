// Dark mode button logic
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  confirmation.innerHTML = `
    <h3>Appointment Confirmed ✅</h3>
    <p>Thank you, <strong>${name}</strong>.</p>
    <p>Your appointment with <strong>${doctor}</strong> is booked for <strong>${date}</strong> at <strong>${time}</strong>.</p>
  `;
  confirmation.classList.remove("hidden");

  form.reset(); // Optional: clear form
});