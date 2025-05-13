function checkErrorEmail(){
    var email = document.getElementById("email");
    var error_email= document.getElementById("error_email");
    if(!checkEmail(email.value)){

        error_email.innerHTML =`<p style="color:red;margin-top :0.5rem"> Nhập đúng định dạng email </p>`;
    }else{

        error_email.innerHTML = "";
    }
}

function checkErrorPhone () {
    var phone = document.getElementById("phone");
    var phone_email= document.getElementById("error_phone");

    if(!isValidTelephone(phone.value)){
        phone_email.innerHTML =`<p style="color:red;margin-top :0.5rem">  Nhập số điện thoại trên 8 số </p>`;
    }else{

        phone_email.innerHTML = "";
    }
}