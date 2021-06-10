import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Home.js'
import Shop from './Shop.js'
import Cart from './Cart.js'
import {Navbar, Nav} from 'react-bootstrap'
import {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([])

  useEffect(() => {

    // let scripts = Array.from(document.querySelectorAll('script'))
    // scripts.forEach(script => script.crossorigin="anonymous")

    // const proxy = "https://cors-anywhere.herokuapp.com/"
    const apiKey = "AED9CFBC8ED7D3CC9D957D821D70CA8C"
    fetch(`https://api.upcdatabase.org/product/0111222333446?apikey=${apiKey}`,{
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => console.log(data))
  })


  return (
    <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Apple Store</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/items">Shop</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/items">
            <Shop/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>

    </div>
  );
}

export default App;
