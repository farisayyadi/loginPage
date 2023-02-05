import React, {useState} from "react";



 const Login = () =>  {

    const [name, setName] = useState('');

    
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
    }
    const onChangeHandler = event => {
        setName(event.target.value);
    }
        return(
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> UserName</label>
                <input onChange={onChangeHandler} value={name} id="login_name" type="text" name="name" placeholder="write your name" required />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }


    export default Login;
