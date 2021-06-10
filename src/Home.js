import {Link} from 'react-router-dom'

const Home = () => {
    return(
        <div id="home">
            <h1> Welcome to the Virtual Storefront! </h1>
            <Link to="/items">Enter the Store</Link>
        </div>
    )
}

export default Home;