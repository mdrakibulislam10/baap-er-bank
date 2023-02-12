// step-1: add event handler to the submit btn;
document.getElementById("submit-btn").addEventListener("click", function () {
    // step-2: get the email address from the email input field;
    const emailField = document.getElementById("user-email");
    const email = emailField.value;

    // step-3: get password
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;

    // step-4: verify email and password: DO NOT DO THIS FOR THE CLIENT SITE, its not well way - just practice:
    // i.
    if (email === "sontan@gmail.com" && password === "secret") {
        // location.href = "bank.html";
        window.location.href = "bank.html";
    }
    // ii.
    /* if (email.includes("@") && email.endsWith(".com") && password) { // password mean if there is any password then, execute the condition
        console.log("valid");
    } */

    else {
        // error message
        /* document.getElementById("error-msg").style.display = "block";
        return; */

        // error message with alert
        alert("Invalid User");
    }
    // document.getElementById("error-msg").style.display = "none";
});
