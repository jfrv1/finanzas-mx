const goalInput = document.getElementById("goal");
const monthsInput = document.getElementById("months");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {
  const goal = Number(goalInput.value);
  const months = Number(monthsInput.value);

  if (goal <= 0 || months <= 0) {
    result.textContent = "Por favor ingresa valores válidos.";
    return;
  }

  const monthlySaving = goal / months;

  result.textContent =
    "Necesitas ahorrar $" +
    monthlySaving.toFixed(2) +
    " pesos al mes para alcanzar tu meta.";
});