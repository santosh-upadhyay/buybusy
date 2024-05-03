import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import ProductDetail from './Components/ProductDetail'
import SearchItem from './Components/SearchItem'
import Cart from './Components/Cart'
import { items } from './Components/Data'
import SignUp from './Components/SignUp/SignUp.jsx'
import SignIn from './Components/SignIn/SignIn.jsx'
import { getAuth,onAuthStateChanged} from "firebase/auth";
import { app } from "./firebase";
import ForgotPassword from './Components/ForgotPassword'

const auth = getAuth()
const App = () => {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  const [userName,setUserName]=useState("");
  const[isLogin,setLogin] = useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.email);
      }else{
          setUserName("UserName")
      }
    const is_Login = localStorage.getItem('isLogin')
    setLogin(is_Login)
  })
},[])
  return (
    <>
    <Router>
    <Navbar cart={cart} setData={setData} userName={userName} isLogin={isLogin} setLogin={setLogin}/>
    <Routes>
      <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
      <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
      <Route path='/reset' element={<ForgotPassword/>}/>
    </Routes>
  
    </Router>
    </>
  )
}

export default App