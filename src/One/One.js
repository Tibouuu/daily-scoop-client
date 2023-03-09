import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom' // import useState
import axios from 'axios'
import Article from "../Article/Article";
function One() {
    const [article, setArticle] = useState(null)
    let params = useParams()

    async function getArticle() {
        const tmp = (await axios.get('http://localhost:8000/api/article/'+params.id)).data
        setArticle(tmp)
    } 
    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
getArticle()
}, []);


    if(article == null)
    return <>Wait please</>

    return <Article article={article} />
}

export default  One;