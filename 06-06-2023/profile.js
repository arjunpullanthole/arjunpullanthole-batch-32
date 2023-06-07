let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("disp-fname").innerHTML = document.getElementById("fname").value;
    document.getElementById("disp-lname").innerHTML = document.getElementById("lname").value;
    const radioInput = document.querySelector('input[name="gender"]:checked');
    if(radioInput!=null){
        document.getElementById("disp-gender").innerHTML = radioInput.value;
    }
    else
        document.getElementById("disp-gender").innerHTML = "";
    document.getElementById("disp-email").innerHTML = document.getElementById("email").value;
    document.getElementById("disp-phone").innerHTML = document.getElementById("phone").value;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const checkedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
    document.getElementById("disp-hobbies").innerHTML = checkedValues;
    document.getElementById("disp-dob").innerHTML = document.getElementById("dob").value;
    document.getElementById("display-saved").style.visibility = "visible";
});