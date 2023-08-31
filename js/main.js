/* document.getElementById('myCheckbox').addEventListener('click',function(event){
    event.preventDefault();
}) */
let registerFormBtn   = document.getElementById('registerFormBtn'),
    loginFormBtn      = document.getElementById('loginFormBtn');
/* ====== this code is for show data for login or register ======*/
loginFormBtn.addEventListener('click',function(){
    registerForm.style.display = 'none';
    loginForm.style.display   = 'block';
})

registerFormBtn.addEventListener('click',function(){
    registerForm.style.display='block';
    loginForm.style.display   = 'none';
})
/* ========= end this code =======*/

/* =============== register form ================ */

let nameInpute            = document.getElementById('registerName'),
    emailRegisterInput    = document.getElementById('registerEmail'),
    passwordRegisterInput = document.getElementById('registerPassword'),
    registerBtn           = document.getElementById('registerBtn'),
    dataContainer = [];
let clearForm         = [...document.getElementsByClassName('form-control')];
let check = document.getElementById('check');

registerBtn.onclick = function(){
    addRecord();   
}
function isUsed() {
    for (let i = 0; i < dataContainer.length; i++) {
        if (dataContainer[i].email.toLowerCase() == emailRegisterInput.value.toLowerCase()) {
            return false
        }
    }
}

if(localStorage.getItem("record") !=null){
    dataContainer = JSON.parse(localStorage.getItem("record"))
}else{
    dataContainer = [];
}
function addRecord(){
    let record = {
        name: nameInpute.value,
        email: emailRegisterInput.value,
        password: passwordRegisterInput.value
    }
    if(isUsed()==false){
        check.innerHTML = '<p class="text-danger m-3">This email is Used</p>';
        check.style.background = 'rgba(255,0,0,0.1)'
    }else if(emailRegisterInput.value == '' || passwordRegisterInput.value == '' || nameInpute.value == ''){
        check.innerHTML = '<p class="text-danger m-3">There is an Empty Feild</p>';
        check.style.background = 'rgba(255,0,0,0.1)'
    } else if(validateEmail()==false){
        check.innerHTML = '<p class="text-danger m-3">"You have entered an invalid email address!"</p>';
        check.style.background = 'rgba(255,0,0,0.1)'
    }
    else{
        dataContainer.push(record);
        localStorage.setItem('record', JSON.stringify(dataContainer)) 
        check.innerHTML = '<p class="text-success m-3">Account Added successfully</p>';
        check.style.background = 'rgba(0,255,0,0.3)'
        clear();
    }

}

function clear(){

    return clearForm.map(el => el.value = '')
}

function validateEmail() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailRegisterInput.value))
  {
    return (true)
  }  
    return (false)
}


/* =============== end register form ================ */




/* =============== start login form ================ */
let emailLoginInput       = document.getElementById('loginEmail'),
    passwordLoginInput    = document.getElementById('loginPassword'),
    loginBtn              = document.getElementById('loginBtn'),   
    emailError            = document.getElementById('emailError'),
    passError             = document.getElementById('passError');

loginBtn.onclick = function(){
    login();   
}

function loginEmpty() {
        if (emailLoginInput.value == "" || passwordLoginInput.value == "") {
            return false
        } else {
            return true
        }
    }

    function login() {
        if (loginEmpty() == false) {
            emailError.style.display = "block";
            passError.style.display = "block";
        } else{
            let email = emailLoginInput.value
            let password = passwordLoginInput.value
            for (var i = 0; i < dataContainer.length; i++) {
                if (dataContainer[i].email.toLowerCase() == email.toLowerCase() && dataContainer[i].password.toLowerCase() == password.toLowerCase()) {
                    window.open("file:///E:/Route/Assignments/js%20tasks/Task%2003/welcome.html","_self")
                    clear();   
        } else{
            emailError.style.display = "block";
            passError.style.display = "block";
        }

    }

}}

emailLoginInput.addEventListener('textInput',function(){
        emailError.style.display = "none";
})
passwordLoginInput.addEventListener('textInput',function(){
        passError.style.display = "none";
})

/* =============== end login form ================ */



