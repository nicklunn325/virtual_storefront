import {useState, useEffect} from 'react'
import ItemCard from './ItemCard'

const Shop = () => {

    const [items, setItems] = useState([])

    // state = {
    //     items: []
    // }

    const fetchItems = () => {
        fetch('http://localhost:3000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }

    // const setItems = (data) => {
    //     this.setState({items: data})
    // }
    
    useEffect(fetchItems, [])

    const renderItems = () => {
        return items.map(item => <ItemCard key={item.id} item={item}/>)
    }

    // fetch and display all items from database
    return(
        <div id="shop">
            {renderItems()}
        </div>
    )
}

export default Shop;