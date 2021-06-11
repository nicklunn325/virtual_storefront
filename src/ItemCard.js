import {useState} from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

const ItemCard = ({item}) => {

    const [front, setSide] = useState(true)
    
    const flipCard = () => {
        setSide(!front)
    }

    // const frontOrBack = () => {
    //     return front ? <CardFront id={item.id} image={item.image} flipCard={flipCard}/> : <CardBack flipCard={flipCard} title={item.title} description={item.description} price={item.price} quantity={item.quantity} id={item.id}/>
    // }

    return (
        <div className="item-card">
            <div className="card-inner">
                {/* {frontOrBack()} */}
                <CardFront id={item.id} image={item.image}/>
                <CardBack title={item.title} description={item.description} price={item.price} quantity={item.quantity} id={item.id}/>
            </div>
        </div>
    )
}

export default ItemCard


