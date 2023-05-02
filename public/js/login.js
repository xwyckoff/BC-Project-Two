const loginFormHandler = async (event) => {
    let username = document.querySelector('.login-username');
    let password = document.querySelector('.login-password');

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

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);