var checkEmail = document.getElementById('checkEmail'),
    checkBtn   = document.getElementById('checkBtn'),
    emailError            = document.getElementById('emailError'),
    dataContainer = [];






var newPassword     = document.getElementById('newPassword'),
    confirmPassword = document.getElementById('confirmPassword'),
    changekBtn      = document.getElementById('changerBtn'),
    newPass = 0,
    passwordChange  = document.getElementById('passwordChange')

    function updatePassword(){
        var record = {
            newPassword: newPassword.value,
            confirmPassword: confirmPassword.value
        }
        dataContainer[newPass] = record;
        localStorage.setItem('bookMarkers' , JSON.stringify(dataContainer));
        passwordChange.style.display = 'block';

    }