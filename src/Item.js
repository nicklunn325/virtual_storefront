import {useState} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const ItemCard = ({item}) => {

    const [image, setImage] = useState(true)
    
    const flipCard = () => {
        setImage(!image)
    }

    const frontOrBack = () => {
        return image ? <CardFront id={item.id} image={item.image} flipCard={flipCard}/> : <CardBack flipCard={flipCard} title={item.title} description={item.description} price={item.price} quantity={item.quantity} id={item.id}/>
    }

    return (
        <div className="item">
           {frontOrBack()}
        </div>
    )
}

export default ItemCard
