function generateRandomNumbers() {
  const rangeMax = parseInt(document.getElementById("rangeMax").value);
  const count = parseInt(document.getElementById("count").value);
  const resultBox = document.getElementById("resultBox");

  if (isNaN(rangeMax) || isNaN(count) || rangeMax <= 0 || count <= 0) {
    resultBox.textContent = "⚠️ Please enter valid positive numbers.";
    return;
  }

  if (count > rangeMax + 1) {
    resultBox.textContent = "⚠️ Count cannot be greater than the range.";
    return;
  }

  const numbers = new Set();
  while (numbers.size < count) {
    const rand = Math.floor(Math.random() * (rangeMax + 1));
    numbers.add(rand);
  }

  resultBox.textContent = `🎯 Generated Numbers: ${[...numbers].join(", ")}`;
}
