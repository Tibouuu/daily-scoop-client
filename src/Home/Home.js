import { Routes, Link, Route } from "react-router-dom";
import Article from "../Article/Article";
import "./Home.css";

function Home() {
    return (
        <div className="Home">
            <div className="grid">
                <Link id="article1" to="/Article/3"></Link>
                <Link id="article2" to="/Article"></Link>
                <Link id="article3" to="/Article"></Link>
                <Link id="article4" to="/Article"></Link>
                <Link id="article5" to="/Article"></Link>
                <Link id="article6" to="/Article"></Link>
                <Link id="article7" to="/Article"></Link>
                <Link id="article8" to="/Article"></Link>
                <Link id="article9" to="/Article"></Link>
                <Link id="article10" to="/Article"></Link>
                <div className="title">
                    <img src="icons/TDS_LOGO+ICONS-01.png"/>
                </div>
            </div>
        </div>
    )
}

export default Home;