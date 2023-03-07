import logo from './logo.svg';
import { Route, Link, Routes } from "react-router-dom";
import './App.css';
import Article from './Article/Article';
import Home from './Home/Home';

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
        <a id="closeBtn" onClick={closeNav} href="#" className="close">×</a>
        <ul>
          <li><a>Sport</a></li>
          <li><a>Art</a></li>
          <li><a>Music</a></li>
          <li><a>Fashion</a></li>
        </ul>
      </div>

      {<a href="#" onClick={openNav} id="openBtn">
        <span className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>}

      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route exact={true} path="/Article" element={<Article />} />
      </Routes>



    </div>
  );
}

export default App;
