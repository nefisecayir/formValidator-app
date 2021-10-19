const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');


// form.addEventListener('submit', function(e){
//     e.preventDefault();
//         //* bunu çalıştırırsak form submit olayını gerçekleştiremez, böylece konsolda kalır, silinmez.
//     // console.log(username.value);
    
//     //* girdiğimiz değerlerin kontrolu (doğru değer mi)
//     if (username.value === ''){
//         // username.className = 'form-control error'
//             //* error'ü kullanmak yerine is-invalid'i de kullanırsak aynı işlevi görür.
//         username.className = 'form-control is-invalid'
//     }else{
//         username.className = 'form-control is-valid'
//             //* isvalid ile onay işareti çıkar
//     }

//     if (email.value === ''){
//         email.className = 'form-control is-invalid'
//     }
    
//     if (password.value === ''){
//         password.className = 'form-control is-invalid'
//     }

//     if (repassword.value === ''){
//         repassword.className = 'form-control is-invalid'
//     }
// })



//* girdiğimiz değerlerin başka bir kontrolu (doğru değer mi)

form.addEventListener('submit', function(e){
    e.preventDefault();
        //* bunu çalıştırırsak form submit olayını gerçekleştiremez, böylece konsolda kalır, silinmez.
    // console.log(username.value);
    
    if (username.value === ''){
        // username.className = 'form-control error'
        error(username, 'please type a username');

    }else{
        success(username);
    }

    if (email.value === ''){
        error(email, 'please type an e-mail');
            //* ikinci parametre olarak uyarı mesajlarını ekledik.
    }
    else if (!validateEmail(email.value)){
                //* formata uygun olmadığı zaman error vermesini istrdiğimiz için ! koyduk.
        error(email, 'please type an correct e-mail address');
    }
        else{
        success(email);
    }
    
    if (password.value === ''){
        error(password, 'you have to enter a password');
    }else{
        success(password);
    }

    if (repassword.value === ''){
        error(repassword, 'you have to verify your password');
    }else{
        success(repassword);
    }
});

function error(input, message){
    input.className = 'form-control is-invalid';

    //* uyarı mesajı ekleme:
    const div = input.nextElementSibling;
        //* kardeş eleman olan diğer div'den sonraki ilk div'e ulaştık.
    div.innerText = message;
        //* içindeki text'e ulaştık
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid';
}


//* REGULAR EXPRESSION
            //* gönderdiğimiz string bilginin belli bir formata uyup uymadığını gösterir.

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//         //* mail adresi formatına uyan bir yapı olduğu için true değer alır olmasaydı false değer alırdı.

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value)){
        success(input);
    }else{
        error(input, 'you have to type an email adress');
    }
}


      



//** ORGANIZING THE CODE */

// function checkRequired(input){
//         //* gerekli alanları kontrol etmek için kullanırız.
//     // console.log(input.value)
//     if (input.value ===''){
//         error(input, 'fill this space')
//     }else{
//         success(input);
//     }
// }

// function checkRequired(input){
//     //* gerekli alanları kontrol etmek için kullanırız.
// // console.log(input.value)
// if (input.value ===''){
//     error(input, 'fill this space')
// }else{
//     success(input);
// }

// }

// form.addEventListener('submit', function(e){
//     e.preventDefault();

//     checkRequired(username);
//     checkRequired(email);
//     checkRequired(password);
//     checkRequired(repassword);

// });



//* daha sade yazımı (liste oluşturma)

function checkRequired(inputs){
     //* gerekli alanları kontrol etmek için kullanırız.
    inputs.forEach(function(input){
        // console.log(input.value)
        if (input.value ===''){
            error(input, `fill ${input.id} space`)
        }else{
            success(input);
        }

    })
}



function checkLength(input, min, max){
    if(input.value.length < min){
        error (input, `${input.id} min. ${min} character required`)
    }else if (input.value.length > max){
        error (input, `${input.id} min. ${max} character required`)
    }else{
        success(input);
    }
}

function checkPasswords(input1, input2, min, max){
    if(input1.value !== input2.value){
        error(input2, 'passwords are not matching');
    }
        //* input1 ile input2 iki birbirlerine eşit değilse (eşleşmiyorsa) error verir.
    
}

function checkPhone(input){
    var exp = /^\d{10}$/;
        //* sayısal bir bilgi olması ve 10 karakterli olması gerektiğiyle ilgili bir expression
    if(!exp.test(input.value)){
        error(input, 'Your phone number have to have 10 characters')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, repassword, phone]);
        //* girdiğimiz değerlerin olması gerekir
    checkEmail(email);
        //* email için adres kontrolü
    checkLength(username, 7,15);
        //* username için uzunluk kontrolü
        //** min = 7 , max = 15 */ 
    checkLength(password, 7, 12);
        //* password için min 7 max 12 uzunluk kontrolü
    checkPasswords(password, repassword);
        //* parolaların eşleşme kontrolü
    checkPhone(phone);
        //* karakter uzunluğu kontrolü

});
