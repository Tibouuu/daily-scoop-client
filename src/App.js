import logo from './logo.svg';
import { Route, Link, Routes } from "react-router-dom";
import './App.css';
import Article from './Article/Article';
import Home from './Home/Home';
import Swiper from 'swiper';
import Login from './Login/Login'
import Archive from './Archive/Archive';
import Register from './Register/Register';
import PostArticle from './Journalist/PostArticle';

function App() {
  function openNav() {
    document.getElementById("mySidenav").classList.add("active")
  }

  function closeNav() {
    document.getElementById("mySidenav").classList.remove("active")
  }

  return (
    <div className="App">
      <div id="mySidenav" className="sidenav">
        <a id="closeBtn" onClick={closeNav} className="close">×</a>
        <div className='top-menu'><Link onClick={closeNav} to="/">Home</Link><Link onClick={closeNav} to="/Archive">Search</Link></div>

        <ul>
          <li><a>Sport</a></li>
          <li><a>Art</a></li>
          <li><a>Music</a></li>
          <li><a>Fashion</a></li>
        </ul>
        <div className='profile'>
          <Link to="/Login" onClick={closeNav}>Login</Link>
          <Link to="/Registration" onClick={closeNav}>Register</Link>
          <Link to="/PostArticle" onClick={closeNav}>Post Article</Link>
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
        <Route exact={true} path="/Article" element={<Article />} />
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
