import React, {useState} from "react";


import TextBox from "../../components/text-box/text-box";
import CustomButton from "../../components/custom-button/custom-button";

import "./sign-in-register-styles.scss";

function SignInRegister() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });
   
    const [userType, setUserType] = useState({
        customer: false,
        creator: false,
    })

    const handleClickChange = (event) => {
       console.log(event.target)
    }

    const handleTextChange = (event) => {
        const [name, value] = event.target;

        setLogin({[name]:value})
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Login Submitted!");
        //need redirect here
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Register Submitted!");
        //need redirect here
    }
    return(
        <div className="sign-in-register">

            <div className="login-box">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <TextBox type={"text"} name={"username"} value={login.username} placeholder={"username"} onChange={handleTextChange}/>
                    <TextBox type={"password"} name={"password"} value={login.password} placeholder={"password"} onChange={handleTextChange}/>
                    <button>Login</button>
                </form>
                
            </div>
          <div className="register-box">
                <h2>Register</h2>
                <h5>Are you a...</h5>
                <form className="register-inialize-form" onSubmit={handleRegisterSubmit}>
                    <label>Customer</label>
                    <input type="radio" name={"user-type"} value={userType.customer} onClick={handleClickChange} />
                    <label>Creator</label>
                    <input type="radio" name={"user-type"} value={userType.creator} onClick={handleClickChange} />
                    <button>Login</button>
                </form>
                
                
            </div>
        </div>
    )
}

export default SignInRegister;