let counterValue = 0;
const btnDec = document.querySelector('button[data-action="decrement"]');
const btnInc = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
const onBtnClick = (num) => { 
    counterValue += num;
    value.textContent = counterValue;
}
btnDec.addEventListener("click", () => onBtnClick(-1));
btnInc.addEventListener("click", () => onBtnClick(1));