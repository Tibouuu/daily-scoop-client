import "./Archive.css";
import axios from "axios";
import ArticleItem from "./ArticleItem";
import { Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Article from "../Article/Article";

function Archive(){
    const [results, setResults] = useState([]);
    const [filter, setFilter] = useState("");
    let filtered = results.filter(c => c.title.toUpperCase().includes(filter.toUpperCase()));
    async function getArticles() {
        try {
            const data = (await axios.get("http://localhost:8000/api/articles")).data;
            setResults(data)
        } catch (err) {
            console.error("error Archive/getArticles", err)
        }
    }

    useEffect(() => {
        (async () => {
            await getArticles();
        })();
    }, []);

    function handleFilterChange(e) {
        setFilter(e.target.value)
    }

    return(
        <div className="archive">
            <input name="filtre" type="text" placeholder="What would you read?" value={filter} onChange={handleFilterChange} />
            {filtered.map(x => <Link key={x.id} to={"/Article/:id"}><ArticleItem key={x.id} {...x}/></Link>)}
        </div>
    )
}

export default Archive;