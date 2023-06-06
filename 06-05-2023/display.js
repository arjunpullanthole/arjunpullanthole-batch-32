function submit(){
    document.getElementById("disp-fname").innerHTML = document.getElementById("fname").value;
    document.getElementById("disp-lname").innerHTML = document.getElementById("lname").value;
    document.getElementById("disp-dob").innerHTML = document.getElementById("dob").value;
    document.getElementById("disp-email").innerHTML = document.getElementById("email").value;
    document.getElementById("disp-phone").innerHTML = document.getElementById("phone").value;
    document.getElementById("disp-edu").innerHTML = document.getElementById("edu").value;
    document.getElementById("display-saved").style.visibility = "visible";
}