import {useState, useEffect} from 'react'
import CartItem from './CartItem.js'

const Cart = () => {

    const [cartItems, setCartItems] = useState([])

    const fetchCartItems = () => {
        fetch("http://localhost:3000/cartItems")
        .then(res => res.json())
        .then(data => setCartItems(data))
    }

    const totalPrice = (quantity, price) => {
        return quantity * price
    }

    const cartTotal = () => {
        return cartItems.reduce((accum, cartItem) => {
            return accum + totalPrice(cartItem.quantity, cartItem.price)
        }, 0)
    }

    const deleteItem = (id) => {

        fetch(`http://localhost:3000/cartItems/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

        updateCartItems(id)

    }

    const deleteFetch = (id) => {
        fetch(`http://localhost:3000/cartItems/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json",
                "Accepts": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }

    const updateCartItems = (id) => {
        let updatedCartItems = cartItems.filter(cartItem => {
            return id !== cartItem.id
        })
        setCartItems(updatedCartItems)
    }

    useEffect(fetchCartItems, [])


    const checkout = () => {
        cartItems.forEach(cartItem => deleteItem(cartItem.id))
        setCartItems([])
    }

    const renderCartItems = () => {
        return cartItems.map(cartItem => <CartItem deleteItem={deleteItem} id={cartItem.id} title={cartItem.title} quantity={cartItem.quantity} totalPrice={totalPrice(cartItem.quantity, cartItem.price)}/>)
    }
    // fetch and display all cartItems from database
    // check out functionality 
        // delete all cartItems in database
    return(
        <div id="cart">
            <h1> Cart </h1>
            {renderCartItems()}
            <p>Total: {cartTotal()}</p>
            <button onClick={checkout}>Checkout</button> 
        </div>
    )
}

export default Cart;