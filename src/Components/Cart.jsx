import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart,setCart}) => {
  const[count ,setCount]=useState(1);
  return (
    <>
    <div className="container my-5" style={{width:"54%"}}>
      {
        cart.length==0 ?(
<>
<div className='text-center'>
  <h1>Your Cart is Empty</h1>
  <Link to={"/"} className='btn btn-warning'>Continue Shopping...</Link>
</div>
</>
        ):
      cart.map((product)=>{
        return(
          <>
          <div className="card mb-3 my-5" style={{width:'700px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={product.imgSrc} style={{height:'400px'}} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-3">{product.price} ₹</button>
                      <button className="btn btn-warning but"style={{background:'green'}}>Buy Now</button>
                      <button className="btn btn-warning but" onClick={()=>{if(count<2){
                        setCart("")
                      }else{setCount(count-1)}}}style={{background:'red'}}>-</button>
                       <button className="btn btn-warning but">{count}</button>
                       <button className="btn btn-warning but"style={{background:'green'}} onClick={()=>{setCount(count+1)}}>+</button>
                        <p style={{background:'red'}}>total amount : {count*product.price}</p>
      </div>
    </div>
  </div>
</div>
          </>
        )
      })}  
    </div>

    {
        cart.length!=0 && (
          <div className="container text-center my-5" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
  
          }}>
            <button className='btn btn-warning mx-5 '>CheckOut</button>
            <button onClick={()=>setCart("")} className='btn btn-danger'style={{background:'red'}}>Clear Cart</button>
          </div>
        )
      }
    
       
    </>
  )
}

export default Cart