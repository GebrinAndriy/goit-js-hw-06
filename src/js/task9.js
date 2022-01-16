const btn = document.querySelector('.change-color');
const widget = document.querySelector('.widget');
const span = document.querySelector('.color');
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = () => {
    widget.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor();
}
btn.addEventListener('click', changeColor);