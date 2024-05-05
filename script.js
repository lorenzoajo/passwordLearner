
function generatePassword() {
    var passwordLength = document.getElementById("passwordLength").value;
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    document.getElementById("generatedPassword").value = password;
}

function checkPassword() {
    var generatedPassword = document.getElementById("generatedPassword").value;
    var userPassword = document.getElementById("userPassword").value;
    var passwordField = document.getElementById("userPassword");
    
    if (userPassword === generatedPassword) {
        passwordField.classList.remove("invalid");
        passwordField.classList.add("valid");
    } else {
        passwordField.classList.remove("valid");
        passwordField.classList.add("invalid");
    }
}
