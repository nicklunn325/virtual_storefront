
const CartItem = ({deleteItem, id, totalPrice, quantity, title}) => {
    return(
        <div>
            <p>{`${title} - ${quantity} - ${totalPrice}`}</p>
            <button onClick={() => deleteItem(id)}>X</button>
        </div>
    )
}

export default CartItem