import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'
import { items } from './Components/Data'


const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} />
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
    </Routes>
  
    </Router>
    </>
  )
}

export default App