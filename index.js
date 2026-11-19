/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("inputUnits");
const btnConvert = document.querySelector(".convert");
const pLength = document.getElementById("length");
const pVolume = document.getElementById("volume");
const pMass = document.getElementById("mass");

btnConvert.addEventListener('click', convertClick);

function convertClick() {
  let inputValue = inputEl.value;
  if (isNaN(inputValue)) {
    console.log("Input must be numbers");
  } {
    // console.log("yeah! - inputValue: "+inputValue);
    pLength.textContent = convertLength(inputValue);
    pVolume.textContent = convertVolume(inputValue);
    pMass.textContent = convertMass(inputValue);
  }
}

function convertLength(num) {
  const mToft = 3.281;
  const ftTom = (1/3.281);
  return `${num} meters = ${Number(num * mToft).toFixed(3)} feet || ${num} feet = ${Number(num*ftTom).toFixed(3)} meters`;
}

function convertVolume(num) {
  const lt2gal = 0.26;
  const gal2lt = Number(1/0.26);
  return `${num} liters = ${Number(num*lt2gal).toFixed(3)} gallons ||  ${num} gallons = ${Number(num*gal2lt).toFixed(3)} liters`;
}

function convertMass(num) {
  const kg2lb = 2.204;
  const lb2kg = Number(1/2.204);
  return `${num} kilos = ${Number(num*kg2lb).toFixed(3)} pounds ||  ${num} pounds = ${Number(num*lb2kg).toFixed(3)} kilos`;
}