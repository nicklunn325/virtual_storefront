
const CardBack = ({updateItems, title, description, id, quantity, price}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        let quantity = e.target.children[0].value
        let cartItem = {
            quantity: quantity,
            title: title,
            price: price
        }
        let config = {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(cartItem)
        }
        fetch("http://localhost:3000/cartItems", config)
        .then(res => res.json())
        .then(data => updateItem(data.quantity))
    }

    const updateItem = (itemQuantity) => {
        let value = quantity - itemQuantity
        let updatedItem = {
            quantity: value
        }
        let config = {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(updatedItem)
        }
        fetch(`http://localhost:3000/items/${id}`, config)
        .then(res => res.json())
        .then(data => updateItems(id, itemQuantity))

    }
    
    return(
        <div className="card-back" >
            <p>{title}</p>
            <p>price - ${price}</p>
            <p>quantity: {quantity}</p>
            <p className="description">{description}</p>
            <form onSubmit={handleSubmit}>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <input type="submit" value="Add to Cart"/>
            </form>
        </div>
    )
}

export default CardBack