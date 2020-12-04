

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
    }).then(res => res.json()).then(data => console.log(data))
}

userLogin()


