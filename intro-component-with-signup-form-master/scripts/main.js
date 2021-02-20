const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.querySelector("form");
const errorElements = document.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
    // Stop form from submitting
    e.preventDefault();
    
    checkInputs();
})

function checkInputs() {
    // Trim - Get rid of white spaces 
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const passwordValue = password.value.trim();
    const emailValue = email.value.trim();

    if (firstNameValue === '') {
        setErrorFor(firstName, "First Name cannot be empty");
    } 

    if (lastNameValue === '') {
        setErrorFor(lastName, "Last Name cannot be empty");
    } 

    if (passwordValue === '') {
        setErrorFor(password, "Password cannot be empty");
    } 

    if (emailValue === '') {
        setErrorFor(email, "Email cannot be empty");
    } else if (!validateEmail(emailValue)) {
        setErrorFor(email, "Looks like this is not an email")
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setErrorFor(input, message) {
    const icon = input.nextElementSibling;
    const error = icon.nextElementSibling;
    error.innerText = message;
    icon.classList.add("icon-show");
    input.classList.add("warning");
}