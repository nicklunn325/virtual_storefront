
const CardFront = ({image, id, flipCard}) => {
    return (
        <img onClick={flipCard} className="item-image" src={image} alt={id} />
    )
}

export default CardFront