const inputColor = document.getElementById("inputColor");
const btnVer = document.getElementById("btnVer");
const hexa = document.getElementById("hexa");
const cardColor = document.getElementById("cardColor");

btnVer.addEventListener("click", () => {
    hexa.textContent = inputColor.value;
    cardColor.style = `background-color: ${inputColor.value}`;
});