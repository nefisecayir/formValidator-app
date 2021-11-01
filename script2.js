const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById('phone')

const info = {
    usersName: 'umutGuler',
    password: 20203030

}

function allowed (inputA, inputB){
   if (inputA.value == info.usersName && inputB.value == info .password){
       window.location = "new-page.html"
   }
   
}

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';
}

function checkUserName(input){
    if (input.value == ''){
        error(input, 'please enter a nickname');
    
}}

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        success(input);
    }else{
        error(input, 'a wrong email address');
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input){
        if (input.value == ''){
            error(input, `${input.id} is required.`);
        }else{
            success(input);
        }
    })
    
}

function checkLength(input, min, max){
    if (input.value.length < min){
        error(input, `${input.id} has to be min ${min} characters.`);
    }else if (input.value.length > max){
        error(input, `${input.id} has to be max ${max} characters.`);
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2){
    if (input1.value !== input2.value){
        error(input2, 'passwords are not matching.');

}}

// function checkPhone(input){
//     var exp = /^\d{10}$/;
//     if(!exp.test(input.value)){
//         error(input, `${input.id} number has to be 10 characters.`)
//     }
// }

function signUp(){
    form.addEventListener('submit', function(e){
        e.preventDefault();
        //console.log(username.value);
    
        // if(username.value == ''){
        //     error(username, 'type a username.');
        // }else{
        //     success(username);
        // }
    
        // if(email.value == ''){
        //     error(email, 'type an email.');
        // }else if(!validateEmail(email.value)){
        //     error(email, 'type a correct e-mail');
        // }
        
        // else{
        //     success(email);
        // }
    
        // if(password.value == ''){
        //     error(password, 'type a password');
        // }else{
        //     success(password);
        // }
    
        // if(repassword.value == ''){
        //     error(repassword, 're-type your password');
        // }else{
        //     success(repassword);
        // }
    
        checkRequired([username, email, password, repassword, phone]);
        checkEmail(email);
        checkLength(username, 7, 15);
        checkLength(password, 7, 12);
        checkPasswords(password, repassword);
        checkUserName(username);
        allowed(username, password);
        
    })
}
