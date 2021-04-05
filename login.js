function login(){
    userName = document.getElementById("email").value;
    passWord = document.getElementById("pwd").value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (userName == ''){
        alert("Please enter the user name ");
    }
    else if(passWord = ''){
        alert("Please enter the password ");
    }
    else if(!filter.test(userName)){ //returns a regex expression that filter exists or not
        alert("User name is not valid. Please try again ");
    }
    else if(passWord.length < 6 || passWord.length > 6){
        alert("Incorrect Password ");
    }
    else{
        alert("Thank you for logging in. You are being redireced to Amazon.in. Happy Shopping! ")
        window.location = "https://www.amazon.in/"
        
    }
}