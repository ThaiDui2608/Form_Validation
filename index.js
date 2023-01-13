function verifyPassword() { 
    let passWord = document.getElementById('pass').value
    let confirmPass = document.getElementById('confirmPass').value
    let message = document.getElementById('message')
    let buttonSubmit = document.getElementById('submitBtn')

    if(!passWord && !confirmPass) 
    {
        message.innerHTML = ''
    }
    else if(passWord && confirmPass && passWord !== confirmPass) 
    {
        message.innerHTML = 'Not match ❌'
        message.style.color = 'red'
        buttonSubmit.type = 'button'
    } else if(passWord == confirmPass) {
        message.innerHTML = 'Match ✅'
        message.style.color = '#596D48'
        buttonSubmit.type = 'submit'
    }
}