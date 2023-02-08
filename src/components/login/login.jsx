import React, {useState} from "react";
import './login.css';
//import SetCookie from "../cookies/setCookie";
//import GetCookie from "../cookies/getCookie";
//import RemoveCookie from "../cookies/removeCookie";


 const Login = () =>  {

    const [name, setName] = useState(''); 

    
    const handleSubmit = (event) =>{
        event.preventDefault();
        document.cookie = `name=${name}`;

    }

    const handleChange = event => {
        setName(event.target.value);
    }

        return(
            <div className="login">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> UserName</label>
                <input onChange={handleChange} value={name} id="login_name" type="text" name="name" placeholder="Write your name" required />
                <button type="submit">Login</button>
            </form>
        </div>
        )
    }


    export default Login;
