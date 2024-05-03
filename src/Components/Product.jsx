import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ items, cart, setCart }) => {
  const[add,setAdd] = useState(0);

  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    // let ans = true;
    // for (const key in cart) {
    //   if (key.id === obj.id) {
    //     ans = false;
    //   }
    // }
    // if(ans){
    //   setCart([...cart, obj]);
    // }
    setCart([...cart, obj]);
    // console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-sm-4"
                  key={product.id}
                  // className="product"
                >
                  <div className="card" style={{ width: "18rem" }}>
                    <Link
                      to={`/product/${product.id}`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img style={{height:'350px'}}
                        src={product.imgSrc}
                        className="card-img-top"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.description}</p>
                      <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button>
                      <button
                        onClick={() =>{
                          addToCart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.imgSrc
                          )
                          setAdd(add+1)
                        }
                      }
                      // disabled={add>0}
                        className="btn btn-warning"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Contact/>
    </>
  );
};

export default Product;
