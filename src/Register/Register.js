import "../Login/Login.css"
import { Link, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import Form from 'react-bootstrap/Form';

import axios from "axios";

function Register(){

    return(
        <div className="login">
        <Routes>
            <Route exact={true} path="/Login" element={<Login />} />
        </Routes>
        <h2>Welcome to the Daily Scoop!</h2>
        <Form>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="password" name="pwd" placeholder="Password"></input>
            <input type="submit" value="Become a Scooper"></input>
        </Form>
        <Link to="/Login">Are you already a <strong>Scooper</strong>? Click here!</Link>
    </div>
    )
}

export default Register;