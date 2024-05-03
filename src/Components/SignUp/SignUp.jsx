import React, { useState } from "react";
import "./style123.css";
// import { initializeApp } from "firebase/app";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase";
import { Password } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const auth = getAuth();

const SignUp = () => {
  const [formField, setFormField] = useState({
    name:'',
    email: "",
    Password: "",
    confirmPassword: "",
  });
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const signUp = (e) => {
    e.preventDefault();
    if((!formField.name || !formField.email || !formField.Password)){
      alert('name , email and password are mandatory')
    }else{
      createUserWithEmailAndPassword(auth,formField.email, formField.Password)
  .then(async(userCredential) => {
      // Signed up
      const user = userCredential.user;
      setFormField({
        name:'',
        email: "",
        Password: "",
        confirmPassword: "",
      })
      alert("SignUp Sucessful")
      history('/')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // 
    });}
  };
  const onChangeField = (e) => {
    e.preventDefault();
    setFormField({
      ...formField,
      [e.target.name]:e.target.value
    })
    // console.log(formField)
  };
  return (
    <div className="container main">
      <h3>SignUp</h3>
      <form onSubmit={handleSubmit}>
        <input className="sys" type="text" placeholder="Name" name="name" value={formField.name} onChange={onChangeField}/>
        <br />
        <input className="sys" type="email" name="email" placeholder="Enter email" value={formField.email} onChange={onChangeField} />
        <br />
        <input className="sys" type="password" name="Password" value={formField.Password} onChange={onChangeField} placeholder="Password"/>
        <br />
        {/* <input type="password" name="confirmPassword" value={formField.confirmPassword} onChange={onChangeField}  placeholder="Confirm Password"/> */}
        {/* <br /> */}
        <button className="my" type="submit" onClick={signUp}>
          Sign Up
        </button>
        <h3>You`ve already an account?</h3><button className="my"><Link to ="/signIn">Login</Link></button>
      </form>
    </div>
  );
};

export default SignUp;
