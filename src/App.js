import logo from './logo.svg';
import { Route, Link, Routes } from "react-router-dom";
import './App.css';
import Article from './Article/Article';
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
        <Route exact={true} path="/Article" element={<Article/>} />
      </Routes>
      
      
      
    </div>
  );
}

export default App;
