const emailInput = document.querySelector(".email");
const form = document.getElementById("contact-form");
const button = document.getElementById(".submit");
const error = document.querySelector(".error");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (email.match(emailRegex)) {
        emailInput.classList.remove("email-error");
        error.style.display = "none";
        emailInput.value = "";

        return true;
    } else {
        emailInput.classList.add("email-error");
        error.style.display = "block";
        return false;
    }
});

