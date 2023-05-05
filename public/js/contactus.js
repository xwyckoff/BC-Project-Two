const contactUsFormHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('name');
    const message = formData.get('message');

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message);
        } else {
            console.log('Error:', response.statusText);
        }
        } catch (error) {
            console.log(error);
    }
};

document.querySelector('#contactUs-form').addEventListener('submit', contactUsFormHandler);