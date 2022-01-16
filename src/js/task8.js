const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const formEmail = formElements.email.value;
    const formPassword = formElements.password.value;
    const User = {
        email: formEmail,
        password: formPassword,
    }
    if (User.email === "" || User.password === "") {
        return window.alert("You must fill in all the fields");
    }
    else {
        console.log(`Email: ${User.email}, password: ${User.password}`);
        event.currentTarget.reset();
    }
    
}

form.AddEventListener('submit', onFormSubmit);

