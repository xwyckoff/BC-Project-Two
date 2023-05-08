const removeFromCart = async (id) => {
    const button = document.getElementById(id);
    const response = await fetch(`/api/cart/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    })

    if(response.ok){
        button.parentElement.remove();
    } else {
        alert('Error removing item');
    }
}