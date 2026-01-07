const goalInput = document.getElementById("goal");
const monthsInput = document.getElementById("months");
const button = document.getElementById("calculateBtn");
const result = document.getElementById("result");
const tipElement = document.getElementById("tip");




function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  return tips[randomIndex];
}
//Consejos random
const tips = [
  "Intenta ahorrar primero y gastar después, no al revés.",
  "Automatizar tu ahorro te ayuda a ser constante.",
  "Empieza con montos pequeños, lo importante es el hábito.",
  "Evita guardar el ahorro en efectivo, sepáralo de tus gastos.",
  "Revisa tus gastos hormiga, ahí suele irse mucho dinero."
];

//Esta funcion evita mostrar el mismo consejo dos veces seguidas
let lastTipIndex = -1;

function getRandomTip() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * tips.length);
  } while (randomIndex === lastTipIndex);

  lastTipIndex = randomIndex;
  return tips[randomIndex];
}

button.addEventListener("click", function () {
  const goal = Number(goalInput.value);
  const months = Number(monthsInput.value);
  tipElement.textContent = "Consejo: " + getRandomTip();


  // Limpia resultado anterior
  result.style.color = "#333";

  if (!goal || goal <= 0) {
    result.textContent = "Ingresa una meta de ahorro válida.";
    result.style.color = "red";
    return;
  }

  if (!months || months <= 0) {
    result.textContent = "Ingresa un número válido de meses.";
    result.style.color = "red";
    return;
  }

  const monthlySaving = goal / months;

  result.innerHTML = `
    Para alcanzar una meta de <strong>$${goal.toLocaleString("es-MX")}</strong> pesos
    en <strong>${months}</strong> meses, necesitas ahorrar aproximadamente
    <strong>$${monthlySaving.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}</strong> pesos al mes.
  `;
});
