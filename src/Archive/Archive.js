import "./Archive.css";
import axios from "axios";
import ArticleItem from "./ArticleItem";
import { useState, useEffect } from "react";

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
        console.log(results)
    }

    return(
        <div className="archive">
            <input name="filtre" type="text" placeholder="What would you read?" value={filter} onChange={handleFilterChange} />
            {filtered.map(x => <ArticleItem key={x.id} {...x}/>)}
        </div>
    )
}

export default Archive;