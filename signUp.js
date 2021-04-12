function signUp(){
    Fname = document.getElementById("name").value;
    userName = document.getElementById("username").value;
    emailId = document.getElementById("email").value;
    passWord1 = document.getElementById("pwd1").value;
    passWord2 = document.getElementById("pwd2").value;

    var passwordExpression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if(Fname == ''){
        alert("Please enter your name ");
    }
    else if(userName == ''){
        alert("Please enter your user name ");
    }
    else if(emailId == ''){
        alert("Please enter your email id");
    }
    else if(passWord1 == ''){
        alert("Please enter password ");
    }
    else if(passWord2 == ''){
        alert("Please confirm the password ");
    }

    else if(!letters.test(fName)){
        alert("Name can be alphabets only. Please enter again ");
    }

    else if(!letters.test(userName)){
        alert("UserName can be alphabets only. Please enter again ");
    }

    else if(!filter.test(emailId)){
        alert("Please enter a valid email id ");
    }

    else if(!passwordExpression.test(passWord1)){
        alert("Please enter a valid password ");
    }

    else if(passWord1 != passWord2){
        alert("Password doesn't match. Please try again");
    }

    else if(passWord1.length < 6 || passWord1.length > 12){
        alert("Password length cannot be less than 6 and more than 12");
    }
    else{
        alert("Thank you for logging in. You are being redirected to Amazon.com. Happy Shopping!");
        window.location = "https://www.amazon.in/";

    }




}