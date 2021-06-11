
const CardBack = ({flipCard, title, description, id, quantity, price}) => {
    return(
        <div className="card card-back" onClick={flipCard}>
            <p>{title}</p>
            <p>price - ${price}</p>
            <p>quantity: {quantity}</p>
            <p>{description}</p>
        </div>
    )
}

export default CardBack