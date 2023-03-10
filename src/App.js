import logo from './logo.svg';
import { Route, Link, Routes, redirect } from "react-router-dom";
import './App.css';
import Article from './Article/Article';
import Home from './Home/Home';
import Swiper from 'swiper';
import Login from './Login/Login'
import Archive from './Archive/Archive';
import Register from './Register/Register';
import PostArticle from './Journalist/PostArticle';
import axios from 'axios';
import { useState } from 'react';
import Top from './Top/Top';
import All from './All/All';
import One from './One/One';

function App() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    loggedIn: localStorage.getItem("isLoggedIn")
  })


  function openNav() {
    document.getElementById("mySidenav").classList.add("active")
  }

  function closeNav() {
    document.getElementById("mySidenav").classList.remove("active")
  }

  function logout() {

    axios.post("http://http://127.0.0.1:8000/api/logout", {
      headers: {
        "Authorization": localStorage.getItem('token')
      }
    })


    localStorage.setItem('token','0')
    localStorage.setItem('level','0')
    window.location.href = "/";
  }
  
  return (
    <div className="App">
      <div id="mySidenav" className="sidenav">
        <a id="closeBtn" onClick={closeNav} className="close">×</a>
        <div className='top-menu'>
          <Link onClick={closeNav} to="/">Home</Link>
          <Link onClick={closeNav} to="/Archive">Search</Link>
          {localStorage.getItem('level') === 'journalist' ? <Link to="/PostArticle" onClick={closeNav}>Write</Link>  : null }
        </div>
        <ul>
          <li><img src="icons/TDS_LOGO+ICONS-11.png"/><Link onClick={closeNav} to="/Sports">Sport</Link></li>
          <li><img src="icons/TDS_LOGO+ICONS-13.png"/><Link onClick={closeNav} to="/Art">Art</Link></li>
          <li><img src="icons/TDS_LOGO+ICONS-14.png"/><Link onClick={closeNav} to="/Music">Music</Link></li>
          <li><img src="icons/TDS_LOGO+ICONS-12.png"/><Link onClick={closeNav} to="/Fashion">Fashion</Link></li>
        </ul>
        <div className='options'>
          <Link to="/All" onClick={closeNav}><p>All the articles</p></Link>
          <Link to="/Top" onClick={closeNav}><p>Most liked articles</p></Link>
        </div>
        <div className='profile'>
          {localStorage.getItem('token') !== '0' ? <div id="greet" onClick={logout}><p>Hi, {localStorage.getItem('name')}</p>
          <p className='logout-btn'>Logout</p>
          </div> :   
          <div id="login_reg">
              <Link className='links' to="/Login" onClick={closeNav}>Login</Link> 
              <Link to="/Registration" className='links' onClick={closeNav}>Register</Link> </div>}

        </div>
      </div>

      {<a onClick={openNav} id="openBtn">
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>}

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/Article/:id" element={<One />} />
        <Route exact={true} path="/All" element={<All categorie=""/>} />
        <Route exact={true} path="/Fashion" element={<All categorie="3" />} />
        <Route exact={true} path="/Sports" element={<All categorie="2" />} />
        <Route exact={true} path="/Technology" element={<All categorie="1" />} />
        <Route exact={true} path="/Music" element={<All categorie="5" />} />
        <Route exact={true} path="/Art" element={<All categorie="4" />} />
        <Route exact={true} path="/Top" element={<Top />} />
        <Route exact={true} path="/Login" element={<Login />} />
        <Route exact={true} path="/Registration" element={<Register />} />
        <Route exact={true} path="/Archive" element={<Archive />} />
        <Route exact={true} path="/PostArticle" element={<PostArticle />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
        
      </Routes>



    </div>
  );
}

export default App;
