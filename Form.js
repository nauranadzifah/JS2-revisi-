const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const jamkeberangkatan = document.getElementById("jamkeberangkatan");
const jumlahtiket = document.getElementById("jumlahtiket");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInput();
})

function checkInput(){
    //get the values form the inputs
    const ussernameValue = username.value.trim();
    const usseremailValue = email.value.trim();
    const usserjamkeberangkatanValue = jamkeberangkatan.value.trim();
    const usserjumlahtiketValue = jumlahtiket.value.trim();

    if (ussernameValue === "") {
        //show error
        //add error class
        setErrorfor(username, "Usernama cannot be blank");
    }else {
        //add success class
        setSuccessFor(username);
    }
    if (emailValue === "") {
        setErrorFor(email, 'Email cannot be blank');
    }else if (isEmail, (emailValue)) {
        setErrorfor(email, "email is not valid");
    }else {
        setSuccessFor(email);
    }
    if (jamkeberangkatanValue === "") {
        setErrorFor(jamkeberangkatan, "hours of depature cannot be blank");
    }else {
        setSuccessFor(jamkeberangkatan);
    }
    if (jumlahtiketValue === "") {
        setErrorFor(jumlahtiket, "totaltikets cannot be blank");
    }else {
        setSuccessFor(jumlahtiket);
    }
}

function setErrorfor(input, message){
    const formControl = input.parentElement;
    const small = formControl.QuerySelector("small");

    //add error message inside small
    small.innerText = message;

    //add error class
    formControl.className = "form-control error"
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}