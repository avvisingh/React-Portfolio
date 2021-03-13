import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import dp from "./dp.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <ul className="Nav-list">
          <a className="Nav-item">Home</a>
          <a className="Nav-item">Projects</a>
          <a className="Nav-item">Contact Me</a>
        </ul>
      </nav>
      <h1>Avvi Singh</h1>
      <h2>Honour The Work, and The Work Will Honour You</h2>
      <div className="Bio-block">
        <img src={dp} alt="a photo of me" className="bio-img" />
        <div className="About-me">
          <h3>A Bit About Me</h3>
          <p>
            This is where I will talk about myself. Points to mention include my
            education, my journey to coding and my future aspirations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
