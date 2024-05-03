import React, { useState } from "react";
import "./style123.css";
import { Link, useNavigate } from "react-router-dom";
import { Password } from "@mui/icons-material";
import { getAuth, signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { app } from "../../firebase";

const auth = getAuth();
const SignIn = () => {
  
  const history = useNavigate();
  const [formField, setFormField] = useState({ email: "", password: "" });
  const onChangeField = (e) => {
    // e.preventDefault();
    setFormField({
      ...formField,
      [e.target.name]: e.target.value,
    });
    // console.log(formField);
  };
  const signIn = async (e) => {
    await signInWithEmailAndPassword(auth, formField.email, formField.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
       updateProfile(user,{displayName:formField.email})
        setFormField({email: "", password: ""})
        localStorage.setItem('isLogin',true)
        alert("login Sucessful")
        history("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        var errorMessage = error.message;
      });
  };
  
  

  return (
    <div className="main">
      <h3>SignIn</h3>
      <div>
        <label>
          Email:
          <input
          className="sys"
            type="email"
            placeholder="Enter email"
            name="email"
            value={formField.email}
            onChange={onChangeField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
          className="sys"
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formField.password}
            onChange={onChangeField}
          />
        </label>
        <br />
        <button type="submit" className="my" onClick={signIn}>
          Log In
        </button>
      </div>
      <Link to="/signUp">
        <button className="my" >SignUp</button>
      </Link>
      <Link to="/reset">
        <button className="my" >ForgotPassword</button>
      </Link>
    </div>
  );
};

export default SignIn;
