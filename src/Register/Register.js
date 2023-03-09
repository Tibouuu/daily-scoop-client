import "../Login/Login.css"
import { Link, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import axios from "axios";
import { useState } from "react";


function Register(){

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleRegister = (e) =>{
        e.preventDefault();
        const { name, email, pwd } = e.target;
        const user = {
            name: name.value,
            email: email.value,
            password: pwd.value
        }

        //change user to json 
        const jsonUser = JSON.stringify(user);
        console.log(jsonUser)
        axios.post("http://127.0.0.1:8000/api/register", jsonUser, { headers: { 'Content-Type': 'application/json' } } )
        .then(res => {
            console.log(res)
            //set data to local storage
            let data = res.data.token_type + " " + res.data.access_token;
            console.log(data)
            localStorage.setItem("token", data);
        }
        )
        
    }

    return(
        <div className="login">
            <h2>Welcome to the Daily Scoop!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="text" name="email" placeholder="Email"></input>
                <input type="password" name="pwd" placeholder="Password"></input>
                <input type="submit" value="Become a scooper"></input>
            </form>
        </div>
    )
}


export default Register;
