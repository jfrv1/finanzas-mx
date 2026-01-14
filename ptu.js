const salaryInput = document.getElementById("salary");
const daysInput = document.getElementById("daysWorked");
const totalPTUInput = document.getElementById("totalPTU");
const buttonPTU = document.getElementById("calculatePTU");
const resultPTU = document.getElementById("ptuResult");
const tipPTU = document.getElementById("ptuTip");
salaryInput.addEventListener("input", function () {
  salaryInput.value = formatCurrency(salaryInput.value);
});

totalPTUInput.addEventListener("input", function () {
  totalPTUInput.value = formatCurrency(totalPTUInput.value);
});


const tipsPTU = [
  "Considera ahorrar una parte de tu PTU para emergencias.",
  "Usa tu PTU para pagar deudas con altos intereses.",
  "Evita gastar tu PTU completo en compras impulsivas.",
  "Tu PTU puede ayudarte a iniciar un fondo de inversión.",
  "Separar tu PTU desde que lo recibes mejora tu disciplina financiera."
];

function randomPTUTip() {
  return tipsPTU[Math.floor(Math.random() * tipsPTU.length)];
}

function formatCurrency(value) {
  const number = value.replace(/[^\d]/g, "");
  if (number === "") return "";
  return "$" + Number(number).toLocaleString("es-MX");
}


buttonPTU.addEventListener("click", function () {
  const salary = Number(salaryInput.value.replace(/[^\d]/g, ""));
  const daysWorked = Number(daysInput.value);
  const totalPTU = Number(totalPTUInput.value.replace(/[^\d]/g, ""));


  resultPTU.style.color = "#333";

  if (!salary || salary <= 0) {
    resultPTU.textContent = "Ingresa un salario mensual válido.";
    resultPTU.style.color = "red";
    return;
  }

  if (!daysWorked || daysWorked <= 0) {
    resultPTU.textContent = "Ingresa los días trabajados en el año.";
    resultPTU.style.color = "red";
    return;
  }

  // Cálculo base estimado
  const dailySalary = salary / 30;
  const salaryFactor = dailySalary * daysWorked;

  let estimatedPTU = salaryFactor * 0.1 / 2;

  if (totalPTU && totalPTU > 0) {
    estimatedPTU = totalPTU * 0.1 * 0.5 * (salary / 100000);
  }

  resultPTU.innerHTML = `
    Con base en la información proporcionada,
    tu <strong>PTU estimado</strong> podría ser de aproximadamente
    <strong>$${estimatedPTU.toLocaleString("es-MX", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}</strong> pesos.
  `;

  tipPTU.textContent = "Consejo: " + randomPTUTip();
});
