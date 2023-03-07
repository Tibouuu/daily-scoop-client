import { Routes, Link, Route } from "react-router-dom";
import Article from "../Article/Article";

function Home(){
    return(
        <>
        <p>Home</p>
        <Link to="/Article"><Article/></Link>
        </>
    )
}

export default Home;