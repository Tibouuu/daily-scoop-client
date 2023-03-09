import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom' // import useState
import axios from 'axios'
import ListArticles from "../ListArticles/ListArticles";
function Top(props) {

    const [articles, setArticles ] = useState(null)

    async function getArticle() {
        const tmp = (await axios.get('http://127.0.0.1:8000/api/toparticles')).data
        setArticles(tmp)
    }

    useEffect(() => { // this is a hook called everytime the function is rendered again
        // Don't forget to import useEffect
    getArticle()
    }, []);  
  
    if(articles == null)
        return <>Wait for the article</>
    
    return <ListArticles articles={articles} />
}

export default Top;
