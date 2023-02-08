import React, {useState} from "react";
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
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> UserName</label>
                <input onChange={handleChange} value={name} id="login_name" type="text" name="name" placeholder="write your name" required />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }


    export default Login;
