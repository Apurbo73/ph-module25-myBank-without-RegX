document.getElementById('log-in').addEventListener('click',function(){
const emailField = document.getElementById('log-in-email');
const userEmail=  emailField.value;


//password getting 

const passwordField = document .getElementById('log-in-password');
const userPassword= passwordField. value;


//email password checking 

if(userEmail=='abc@gmail.com' && userPassword =='abc')
{
    window.location.href= 'banking.html'
}



 });









