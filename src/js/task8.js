const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    const formEmail = event.currentTarget.elements.email.value;
    const formPassword = event.currentTarget.elements.password.value;
    const User = {
        email: formEmail,
        password: formPassword
    };
    if (User.email === "" || User.password === "") {
        return alert("You must fill in all the fields");
    }
    else {
        console.log(`Email: ${User.email}, password: ${User.password}`);
        event.currentTarget.reset();
    }
    
};

form.AddEventListener('submit', onFormSubmit);
