import { click } from "@testing-library/user-event/dist/click";
import "./Article.css";
import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom' // import useState
import axios from 'axios'
function Article(props) {

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
          <img
            className="illustration"
            src="https://wallpapercave.com/wp/wp7304269.jpg"
            alt="illustration article"
          />
        </div>
       <div id="page1" className="page-1 shown-page"> <h1>{article.title}</h1>
       
        <button onClick={() => {props.changeCurrent(props.current-1)}}>previous</button>
        <button onClick={() => {props.changeCurrent(props.current+1)}}>next</button>
        <p className="extract">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="bottom-line">
          <p className="author">Author Username</p>
          <p className="date">01/01/23</p>
        </div>

        <img id="down1" className="buttonDown" src="/icons/chevrons-down-regular-24.png" />
        </div>
        <div id="page2" className="page-2 next-page">
            <img  id="up1" className="buttonUp" src="/icons/chevrons-up-regular-24.png"/>
        <div className="main-article extract">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            curabitur gravida arcu ac. Tellus pellentesque eu tincidunt tortor
            aliquam nulla. Velit laoreet id donec ultrices tincidunt. Viverra
            ipsum nunc aliquet bibendum. Lectus vestibulum mattis ullamcorper
            velit. Bibendum est ultricies integer quis auctor elit. Dictumst
            quisque sagittis purus sit. Tincidunt dui ut ornare lectus sit.
            Placerat vestibulum lectus mauris ultrices eros in. Sed viverra
            ipsum nunc aliquet bibendum enim facilisis. Condimentum id venenatis
            a condimentum vitae sapien. Auctor eu augue ut lectus.</p><p> Blandit massa
              enim nec dui nunc mattis enim. Non pulvinar neque laoreet
              suspendisse interdum consectetur libero id. Pretium nibh ipsum
              consequat nisl vel pretium lectus quam. Porttitor rhoncus dolor
              purus non enim praesent. Lorem sed risus ultricies tristique nulla
              aliquet. Et ligula ullamcorper malesuada proin libero nunc consequat
              interdum. Natoque penatibus et magnis dis parturient montes
              nascetur. Amet dictum sit amet justo donec enim diam vulputate ut.
              Ac felis donec et odio pellentesque diam volutpat commodo.</p><p> Morbi
                enim nunc faucibus a pellentesque sit amet porttitor eget. Viverra
                nibh cras pulvinar mattis. Et leo duis ut diam quam nulla porttitor
                massa id. Laoreet suspendisse interdum consectetur libero id
                faucibus nisl tincidunt eget. Elit scelerisque mauris pellentesque
                pulvinar pellentesque habitant morbi tristique senectus. Potenti
                nullam ac tortor vitae purus faucibus.</p><p> At urna condimentum mattis
                  pellentesque id nibh. Odio eu feugiat pretium nibh ipsum consequat
                  nisl vel. Hendrerit dolor magna eget est lorem. Sagittis aliquam
                  malesuada bibendum arcu vitae elementum curabitur vitae. Turpis
                  cursus in hac habitasse platea dictumst. Iaculis urna id volutpat
                  lacus laoreet non curabitur gravida arcu.</p><p> Auctor augue mauris augue
                    neque gravida in fermentum et sollicitudin. Est ullamcorper eget
                    nulla facilisi etiam dignissim. Tortor condimentum lacinia quis vel
                    eros donec ac odio. Enim eu turpis egestas pretium aenean. Enim eu
                    turpis egestas pretium aenean. Adipiscing elit ut aliquam purus sit
                    amet luctus venenatis lectus. Et ligula ullamcorper malesuada proin

          </p>
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
        </div>
      </div>
    </>
  );
}

export default Article;
