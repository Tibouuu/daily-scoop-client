import "./Login.css"

function Login(){
    return(
        <div className="login">
            <h2>Welcome back, Scooper!</h2>
            <form>
                <input type="text" name="name" placeholder="Name"></input>
                <input type="password" name="pwd" placeholder="Password"></input>
                <input type="submit" value="Go scooping!"></input>
            </form>
        </div>
    )
}

export default Login;