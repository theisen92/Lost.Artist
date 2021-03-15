import React, {useState} from "react";
import { useHistory } from "react-router-dom";

import TextBox from "../../components/text-box/text-box";
import CustomButton from "../../components/custom-button/custom-button";

import "./sign-in-register-styles.scss";

function SignInRegister() {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    });
   
    //false = customer, true = creator
    const [creator, setCreator] = useState(false)
    const history = useHistory();


    const handleClickChange = (event) => {
       console.log(event.target)
       if(event.target.value !== true) {
           console.log("User is creator:", event.target.value);
           
           setCreator(Boolean(event.target.value))
       } else {
           console.log("User is creator:", event.target.value);
           
           setCreator(Boolean(event.target.value))
       }
    }

    const handleTextChange = (event) => {
        const [name, value] = event.target;

        setLogin({[name]:value})
    }

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        console.log("Login Submitted!");
        //need redirect here
        history.push("/")
    }

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        console.log("Register Submitted!");
        //need redirect here
        if(!creator) {
            history.push("/user/register-new-customer")
        } else {
            history.push("/user/register-new-creator")
        }
        
    }
    return(
        <div className="sign-in-register">

            <div className="login-box">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleLoginSubmit}>
                    <TextBox type={"text"} name={"username"} value={login.username} placeholder={"username"} onChange={handleTextChange}/>
                    <TextBox type={"password"} name={"password"} value={login.password} placeholder={"password"} onChange={handleTextChange}/>
                    <button type="submit" className="btn">Login</button>
                </form>
                
            </div>
          <div className="register-box">
                <h2>Register</h2>
                <h5>Are you a...</h5>
                <div className="user-switch">
                   <form className="user-switch-form" onSubmit={handleRegisterSubmit}>
                        
                        <label className="user-switch-label">
                            <span className="user-switch-inner">Creator</span>
                            <span className="user-switch-switched">Customer</span> 
                        </label>
                        <input className="user-switch-checkbox" type="checkbox" name="user-switch" value={!creator} onClick={handleClickChange} />
                        <button type="submit" className="btn">Register</button>
                    </form> 
                </div>
                
                
                
            </div>
        </div>
    )
}

export default SignInRegister;