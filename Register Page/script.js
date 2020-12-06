
function goToLogin () {
    window.location.href = '../Login%20Page/index.html';
}

function createUser() {

    let user = {
        name: document.getElementById('username').value,
        passwordOne: document.getElementById('password1').value,
        passwordTwo: document.getElementById('password2').value
    }
    fetch("http://167.99.138.67:1111/createaccount", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
        if (data.success) {
            goToLogin();
        } else {
            console.log(data)
        }
    })
    console.log(user)
}




