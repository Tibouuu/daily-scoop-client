import { click } from "@testing-library/user-event/dist/click";
import "./Article.css";
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom' // import useState
import axios from 'axios'
function Article(props) {


  function handleCommentSubmit(e) {
    e.preventDefault();
    const comment = {
      content: this.state.content,

    };

    let json = JSON.stringify(comment);
    axios.post("http://127.0.0.1:8000/api/postcomment/${}",  { headers: { 'Authorization': localStorage.getItem('token') } } )
        .then(res => {
            console.log(res)

         
        }

        )


  }

    const article = props.article
    console.log(article)
    window.onload = function(){const buttonDown1 = document.querySelector("#down1")
  const buttonDown2 = document.querySelector("#down2")
  const buttonUp1 = document.querySelector("#up1")
  const buttonUp2 = document.querySelector("#up2")
  const page1 = document.querySelector("#page1")
  const page2 = document.querySelector("#page2")
  const page3 = document.querySelector("#page3")
  const articleImage= document.querySelector("#illustration")
    buttonDown1.addEventListener("click",()=>{
        page2.classList.remove("next-page")
        page1.classList.remove("shown-page")
        page1.classList.add("previous-page")
        page2.classList.add("shown-page")
        articleImage.classList.add("scrolled-down");
    });

    buttonDown2.addEventListener("click",()=>{
        page3.classList.add("shown-page")
        page2.classList.add("previous-page")
        page3.classList.remove("next-page")
        page2.classList.remove("shown-page")
        window.scrollTo(0,0);
       
       
    });

    buttonUp1.addEventListener("click",()=>{
        page1.classList.add("shown-page")
        page2.classList.add("next-page")
        page1.classList.remove("previous-page")
        page2.classList.remove("shown-page")
        articleImage.classList.remove("scrolled-down");
        window.scrollTo(0,0);
       
       
    });

    buttonUp2.addEventListener("click",()=>{
        page2.classList.add("shown-page")
        page3.classList.add("next-page")
        page2.classList.remove("previous-page")
        page3.classList.remove("shown-page")
  
        window.scrollTo(0,0);
       
       
    })
}

    console.log(props.current)
  return (
    <>
      <div className="article-content">
      <div className="img-container" id="illustration">
         
          {article.mediaURL ? <img
            className="illustration"
            src={article.mediaURL}
            alt="illustration article"
          /> : null}
        </div>
       <div id="page1" className="page-1 shown-page"> <h1>{article.title}</h1>
       
        {props.current != undefined ? <button onClick={() => {props.changeCurrent(props.current-1)}}>previous</button> : null}
        {props.current != undefined ?  <button onClick={() => {props.changeCurrent(props.current+1)}}>next</button>: null}
        <p className="extract">
          {article.sumary}
        </p>
        <div className="bottom-line">
          <p className="author">{article.author}</p>
          <p className="date">Posted at {article.created_at}</p>
          <p className="date">updated at {article.updated_at}</p>
        </div>

        <img id="down1" className="buttonDown" src="/icons/chevrons-down-regular-24.png" />
        </div>
        <div id="page2" className="page-2 next-page">
            <img  id="up1" className="buttonUp" src="/icons/chevrons-up-regular-24.png"/>
        <div className="main-article extract">
          {article.content}
        </div>
        <div className="social-container">
            <div className="like"></div>
            <div className="comment"></div>
            <div className="share"></div>
        </div>
        <img  id="down2" className="buttonDown" src="/icons/chevrons-down-regular-24.png" />
        </div>
        <div id="page3" className="page-3 next-page">
        <img  id="up2" className="buttonUp" src="/icons/chevrons-up-regular-24.png"/>
            <p>comments</p>
            {localStorage.getItem("token") ? 
              <form onSubmit={handleCommentSubmit} className="comment-form">
              <input type="text" placeholder="Add a comment" />
              <button>Send</button>
              </form>
            
            : <div class="login-req"> Please log in to comment</div> }
        
        </div>
      </div>
    </>
  );
}

export default Article;
