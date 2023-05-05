const loginFormHandler = async (event) => {
    event.preventDefault();

    let username = document.querySelector('#login-username').value.trim();
    let password = document.querySelector('#login-password').value.trim();

    if(username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        })

        if(response.ok) {
            document.location.replace('/');
        } else {
            alert('Login failed!');
        }
    }
}

document.querySelector('#login-form').addEventListener('submit', loginFormHandler);