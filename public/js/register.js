const registerSubmitHandler = async (event) => {
    event.preventDefault();

    let username = document.querySelector('#registerUsername').value.trim();
    let email = document.querySelector('#registerEmail').value.trim();
    let password = document.querySelector('#registerPassword').value.trim();

    if(username && email && password) {
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok){
            document.location.replace('/')
        } else {
            alert('Incorrect registration!');
        }
    }
}

document.querySelector('#register-form').addEventListener('submit', registerSubmitHandler);