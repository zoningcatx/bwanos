import logo from './assets/logo.png';
import './App.css';
import TG from "./assets/TG.png"
import TW from "./assets/TW.png"

function App() {
  return (
    <div className="App">
      <div className="section1">
        <div className="main">
          <img alt="logo" className="logo" src={logo}/>
          <h1 className="heading">PLOMO O PLATA</h1>
          <div className="socialsBlock">
            <a href="https://t.me/bwanos" target="_blank" rel="noopener noreferrer"><img className="social" alt="TG" src={TG} /></a>
            <a href="https://twitter.com/bwanos_" target="_blank" rel="noopener noreferrer"><img className="social" alt="TW" src={TW} /></a>
          </div>
          <button className="button">BUY $BWANOS</button>
        </div>
      </div>
      <div className="section2">
        <h2 className="heading2">THE ORDEER</h2>
        <div className="desc">
          <h2 className="heading3">SUPPLY: 900M KG</h2>
          <h2 className="heading3">DELIVERY: 6TH MARCH</h2>
        </div>
      </div>
      <div className="section3">
        <div className="divider">
        </div>
      </div>
      <div className="section4">
        <div className="footer">
          <a href="https://t.me/bwanos" target="_blank" rel="noopener noreferrer"><img className="social" alt="TG" src={TG} /></a>
          <a href="https://twitter.com/bwanos_" target="_blank" rel="noopener noreferrer"><img className="social" alt="TW" src={TW} /></a>
        </div>
      </div>
    </div>
  );
}

export default App;
