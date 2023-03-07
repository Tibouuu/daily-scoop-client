import { Routes, Link, Route } from "react-router-dom";
import Article from "../Article/Article";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <div className="grid">
                <Link id="article1" to="/Article"><Article /></Link>
                <Link id="article2" to="/Article"><Article /></Link>
                <Link id="article3" to="/Article"><Article /></Link>
                <Link id="article4" to="/Article"><Article /></Link>
                <Link id="article5" to="/Article"><Article /></Link>
                <Link id="article6" to="/Article"><Article /></Link>
                <Link id="article7" to="/Article"><Article /></Link>
                <Link id="article8" to="/Article"><Article /></Link>
                <Link id="article9" to="/Article"><Article /></Link>
                <Link id="article10" to="/Article"><Article /></Link>
                <div className="title">
                    <h1>Home</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;