import { click } from "@testing-library/user-event/dist/click";
import "./Article.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // import useState
import axios from "axios";
import { func } from "prop-types";
function Article(props) {
  const article = props.article;
  const [page, setPage] = useState(1);
  const [nbLikes, setnbLikes] = useState(null);
  const [comments, setComments] = useState(null);
  console.log(article);

  
  async function likes() {
    const nb = (await axios.get('http://127.0.0.1:8000/api/countarticlelikes/'+article.id))
    setnbLikes(nb)
    

    console.log(nbLikes)
  }

  async function getComments() {
    const comments = (await axios.get('http://localhost:8000/api/comments/'+article.id))
    setComments(comments)
    
  }

  useEffect(() => {
    getComments()
  }, [props.article])


  useEffect(() => { // this is a hook called everytime the function is rendered again
    // Don't forget to import useEffect
  (likes())
}, [props.article]);

    console.log(nbLikes)
    console.log(comments)

  function handleCommentSubmit(e) {
    e.preventDefault();
    const comment = {
      comment_text: document.getElementById("comment").value,
    };
    let token = localStorage.getItem("token");
    console.log(token);
    console.log(comment);

    let json = JSON.stringify(comment);


    const config = {
      headers:{
        Authorization : token
      }
    };
    console.log(config)
    axios
      .post(
        "http://127.0.0.1:8000/api/comment/" +article.id +"/" +comment.comment_text,json,
      config
      )
      .then((res) => {
        console.log(res);
      });
  }

  console.log(article);
  /* window.onload = function(){const buttonDown1 = document.querySelector("#down1")
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

    buttonDown2.addEventListener("click", () => {
      page3.classList.add("shown-page");
      page2.classList.add("previous-page");
      page3.classList.remove("next-page");
      page2.classList.remove("shown-page");
      window.scrollTo(0, 0);
    });

    buttonUp1.addEventListener("click", () => {
      page1.classList.add("shown-page");
      page2.classList.add("next-page");
      page1.classList.remove("previous-page");
      page2.classList.remove("shown-page");
      articleImage.classList.remove("scrolled-down");
      window.scrollTo(0, 0);
    });

    buttonUp2.addEventListener("click", () => {
      page2.classList.add("shown-page");
      page3.classList.add("next-page");
      page2.classList.remove("previous-page");
      page3.classList.remove("shown-page");

      window.scrollTo(0, 0);
    }); */

  function down() {
    if (page < 3) {
      setPage(page + 1);
      console.log(page);
    }
  }

  function up() {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
    }
  }

  function setPosPage1(p) {
    if (p == 1) {
      return "page-1 shown-page";
    } else {
      return "page-1 previous-page";
    }
  }

  function setImgState(p) {
    if (p == 1) {
      return "img-container";
    } else {
      return "img-container scrolled-down";
    }
  }

  function setPosPage2(p) {
    if (p == 1) {
      return "page-2 next-page";
    } else if (p == 2) {
      return "page-2 shown-page";
    } else {
      return "page-2 previous-page";
    }
  }

  function setPosPage3(p) {
    if (p == 3) {
      return "page-3 shown-page";
    } else {
      return "page-3 next-page";
    }
  }

  function handleLike(){


    let json = JSON.stringify(article);

    const config = {
      headers:{
        Authorization : localStorage.getItem("token")
      }
    };
    console.log(config)
    axios
      .get(
        "http://127.0.0.1:8000/api/like/" +article.id,
      config
      )
      .then((res) => {
        console.log(res);
      });

      console.log(likes())


      axios.get("http://127.0.0.1:8000/api/comments/"+article.id).then
      ((res) => {
        console.log(res);
      }
      )


  }

  console.log(props.current);
  return (
    <>
      <img className="like" onClick={handleLike} src="/icons/heart-regular-24.png" />
      {props.current != undefined ? (
          <button
          className="button-prev"
            onClick={() => {
              props.changeCurrent(props.current - 1);
              setPage(1);
            }}
          >
            <img src="/icons/TDS_LOGO+ICONS-09.png"/>
          </button>
        ) : null}
        {props.current != undefined ? (
          <button
          className="button-next"
            onClick={() => {
              props.changeCurrent(props.current + 1);
              setPage(1);
            }}
          >
            <img src="/icons/TDS_LOGO+ICONS-10.png"/>
          </button>
        ) : null}
      <div className="article-content">
        <div className={setImgState(page)} id="illustration">
          {article.mediaURL ? (
            <img
              className="illustration"
              src={article.mediaURL}
              alt="illustration article"
            />
          ) : null}
        </div>
        <div id="page1" className={setPosPage1(page)} >
        <h1>{article.title}</h1>

        <p className="extract">{article.sumary}</p>
        <div className="bottom-line">
          <p className="author">{article.author}</p>
         
        </div>
        <img
          id="down1"
          onClick={down}
          className="buttonDown"
          src="/icons/chevrons-down-regular-24.png"
        />
    </div>
        <div id="page2" className={setPosPage2(page)}>
          <img
            id="up1"
            onClick={up}
            className="buttonUp"
            src="/icons/chevrons-up-regular-24.png"
          />
          <div className="main-article extract">{article.content}</div>
          <div className="social-container">
            <div className="like"></div>
            <div className="comment"></div>
            <div className="share"></div>
          </div>
          <img
            id="down2"
            onClick={down}
            className="buttonDown"
            src="/icons/chevrons-down-regular-24.png"
          />
        </div>
        <div id="page3" className={setPosPage3(page)}>
          <img
            id="up2"
            onClick={up}
            className="buttonUp"
            src="/icons/chevrons-up-regular-24.png"
          />
          <p>comments</p>
          {localStorage.getItem("token") ? (
            <form onSubmit={handleCommentSubmit} className="comment-form">
              <input type="text" id="comment" placeholder="Add a comment" />
              <button>Send</button>
            </form>
          ) : (
            <div className="login-req"> Please log in to comment</div>
          )}


        </div>
      </div>
    </>
  );
}

export default Article;
