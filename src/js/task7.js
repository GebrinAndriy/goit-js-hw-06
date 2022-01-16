const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');
const onInputChange = (event) => { 
    span.style.fontSize = `${event.currentTarget.value}px`;
}
input.addEventListener("input", onInputChange);