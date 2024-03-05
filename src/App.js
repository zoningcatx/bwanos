import logo from './assets/logo.png';
import './App.css';
import TG from "./assets/TG.png"
import TW from "./assets/TW.png"
import batjok from "./assets/batjok.png"

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="main">
          <img alt="logo" className="logo" src={logo}/>
          <h1 className="heading">Bootman VS Jokar</h1>
          <div className="batjockBlock"><img alt="batjok" className="batjok" src={batjok}/></div>
          <div className="socialsBlock">
            <a href="https://t.me/bootmanvsjokar" target="_blank" rel="noopener noreferrer"><img className="social" alt="TG" src={TG} /></a>
            <a href="https://twitter.com/bootmanvsjokar" target="_blank" rel="noopener noreferrer"><img className="social" alt="TW" src={TW} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
