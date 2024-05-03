import React, { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const auth = getAuth();

function ForgotPassword() {
  const [email, setEmail] = useState({ email: "" });
  const history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    setEmail(e.target.email.value);
    sendPasswordResetEmail(auth, email)
      .then((data) => {
        alert("check your gmail");
        // email=""set
        setEmail("");
        history("/signIn");

        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };
  return (
    <div className="main">
      <h1>Forget Password</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="sys"
          type="email"
          name="email"
          placeholder="Enter email"
        />
        <button className="my">Reset</button>
      </form>
    </div>
  );
}

export default ForgotPassword;
