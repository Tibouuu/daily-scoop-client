import "./Login.css"
import { Link, Routes, Route } from "react-router-dom";
import Register from "../Register/Register";

function Login() {
    return (
        <div className="login">
            <Routes>
                <Route exact={true} path="/Registration" element={<Register />} />
            </Routes>
            <h2>Welcome back, Scooper!</h2>
            <form>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="password" name="pwd" placeholder="Password"></input>
                <input type="submit" value="Go scooping!"></input>
            </form>
            <Link to="/Registration">You can become a <strong>Scooper</strong> here!</Link>
        </div>
    )
}

export default Login;