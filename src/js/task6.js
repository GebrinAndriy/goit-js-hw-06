const input = document.querySelector('#validation-input');
const onInputChange = (event) => { 
    const inputLength = event.currentTarget.value.length;
    if (inputLength === Number(input.dataset.length)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }
    else { 
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
}
input.addEventListener('blur',onInputChange);