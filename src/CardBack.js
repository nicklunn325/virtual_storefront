
const CardBack = ({title, description, id, quantity, price}) => {
    return(
        <div className="card-back" >
            <p>{title}</p>
            <p>price - ${price}</p>
            <p>quantity: {quantity}</p>
            <p className="description">{description}</p>
        </div>
    )
}

export default CardBack