const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
const onInputChange = () => { 
    if (input.value === "") {
        span.textContent = "Anonymous";
    }
    else { 
        span.textContent = input.value;
    }
}

input.addEventListener(`input`, onInputChange);