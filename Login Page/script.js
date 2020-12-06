function goToHomePage () {
    window.location.href = '../Home%20Page/index.html';
}

function userLogin() {
    let user = {
        name: document.getElementById('username').value,
        password: document.getElementById('password').value,
        
    }
    fetch("http://167.99.138.67:1111/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
        if (data.success) {
            localStorage.setItem("secretKey", data.secretKey)
            goToHomePage();
        } else {
            console.log(data)
        }
    })
}


console.log(localStorage)
