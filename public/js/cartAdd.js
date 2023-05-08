const addToCart = async (id) => {
    const button = document.getElementById(id);
    const quantity = document.getElementById(`quantity_${id}`)
    const response = fetch('/api/cart', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            product_id: id,
            quantity: quantity.value
        })
    })
}