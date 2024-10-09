import React, { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";
import { BsFillCartCheckFill } from "react-icons/bs";
import Select from "react-select";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);
const Navbar = ({ setData, cart, userName, isLogin, setLogin }) => {

  const Location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // SIGNOUT FUNCTION  
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        setLogin(false);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // const sortedByAsc = () => {
  //   const sortedProducts = items.sort((a, b) => a.id - b.id);
  //   // const element = items.filter((product)=>{product.sort((a, b) => a.price - b.price)})
  //   setData(sortedProducts);
  // };
  // const sortedByDsc = () => {
  //   const element = items.sort((a, b) => b.id - a.id);
  //   setData(element);
  // };
  // console.slog("sajda");
  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    // console.log(element);
    setData(element);
  };

  const filterByPrice = (price) => {
    const element = items.filter((product) => product.price >= price);
    setData(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };
  const sortedBy = (e) => {};
  // const options = [
  //   { value: 'option1', label: 'High To Low' },
  //   { value: 'option2', label: 'Low To High' }

  // ];
  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            E-Cart
          </Link>

          <form
            // onClick={handleSubmit}
            onSubmit={handleSubmit}
            className="search-bar"
          >
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>
          {isLogin ? <span id="user">{userName}</span> : ""}
          <div className="list-inline-item">
            {!isLogin ? (
              <Link to={"/signIn"}>
                <button className="btn btn-success my1" id="login">Login</button>
              </Link>
            ) : (
              <Link>
                <button className="btn btn-success my1" onClick={SignOut}>
                  SignOut
                </button>
              </Link>
            )}
          </div>

         
          <Link to={"/cart"} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: "1.5rem" }} />
              {/* <GiShoppingCart style={{ fontSize: "1.5rem" }}/> */}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">Cart</span>
              </span>
            </button>
          </Link>
        </div>

        {Location.pathname == "/" && (
          <div className="nav-bar-wrapper">
            <div className="items">Filter by {"->"}</div>
            <div onClick={() => setData(items)} className="items">
              No Filter
            </div>
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobiles
            </div>
            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>
            <div onClick={() => filterByCategory("tablets")} className="items">
              Tablets
            </div>
            <div onClick={() => filterByPrice(29999)} className="items">
              {">="}29999
            </div>
            <div onClick={() => filterByPrice(49999)} className="items">
              {">="}49999
            </div>
            <div onClick={() => filterByPrice(69999)} className="items">
              {">="}69999
            </div>

            {/* <div onClick={sortedByAsc()} className="items">
              {">="}sortedByASC
            </div>
            <div onClick={sortedByDsc()} className="items">
              {">="}sortedByDSC
            </div> */}
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
