
const CardFront = ({image, id, flipCard}) => {
    return (
        <img onClick={flipCard} className="card card-front" src={image} alt={id} />
    )
}

export default CardFront