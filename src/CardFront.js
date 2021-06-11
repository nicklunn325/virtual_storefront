
const CardFront = ({image, id}) => {
    return (
        <div className="card-front">
            <img className="card-image" src={image} alt={id} />
        </div>
    )
}

export default CardFront