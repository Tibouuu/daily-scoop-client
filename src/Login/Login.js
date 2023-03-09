import "./Login.css"
import axios from "axios";
import { useState } from "react";



function Login() {

    const [user, setUser] = useState({
        name: "",
        pwd: ""
    })
    
    const handleLogin = (e) => {
        e.preventDefault();
        const { name, pwd } = e.target;
        const user = {
            email: name.value,
            password: pwd.value
        }
  
        const jsonUser = JSON.stringify(user);  
    
        axios.post("http://127.0.0.1:8000/api/login", jsonUser,   { headers: { 'Content-Type': 'application/json' } } )
        .then(res => {
            console.log(res)
            let data = res.data.token_type + " " + res.data.access_token;
            console.log(data)
            localStorage.setItem("token", data);
            localStorage.setItem("level", res.data.level);
            localStorage.setItem("isLoggedIn", true);
            localStorage.setItem("name",res.data.name)
            window.location.href = "/";
        })
  
    }
  

    return (
        <div className="login">
            <h2>Welcome back, Scooper!</h2>
            <form onSubmit={handleLogin}>
                <input type="text" name="name" placeholder="Email"></input>
                <input type="password" name="pwd" placeholder="Password"></input>
                <input type="submit" value="Go scooping!"></input>
            </form>
        </div>
    )
}


export default Login;