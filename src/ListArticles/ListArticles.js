import { click } from "@testing-library/user-event/dist/click";
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Article from "../Article/Article";
function ListArticles(props) {
    const [current, setCurrent] = useState(0)
    console.log(props.articles)
    function changeCurrent(tmp) {
        if(tmp >= props.articles.length)   
            tmp = 0;
            if(tmp <0 )   
            tmp = props.articles.length - 1 ;
        setCurrent(tmp)
    }
    if(props.articles.length == 0 )
        return <>Nothing to display</>
    return <Article article={props.articles[current]} current={current} changeCurrent={changeCurrent}/>
    
}

export default ListArticles;
