import bicycle from './gifs/bike.gif';
import flame from './gifs/flame.gif';
import carbon from './gifs/carbon.gif';
import odometer from './gifs/odometer.gif';
import money from './gifs/money.gif';
import weather from './gifs/weather.gif';
import factory from './gifs/factory.gif';
import './ticker.css';


function Ticker() {
  return(
    <>
  <div className="news-container">
  <div className="hwrap">
  <div className="hmove">
  <div className="hitem"><a href="ticker.html"><img src={bicycle} height="50px" width="100px"></img></a>Progress:</div>
  <div className="hitem"><a href="ticker.html"><img src={flame} height="60px" width="100px"></img></a><div>Calories:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={carbon} height="60px" width="100px"></img></a><div>Carbon Saved:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={odometer} height="60px" width="100px"></img></a><div>KMS Travelled:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={money} height="60px" width="100px"></img></a><div>Money Saved:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={weather} height="60px" width="100px"></img></a><div>Weather:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={factory} height="60px" width="100px"></img></a><div>Air Quality:</div></div>
  </div></div></div>
</>
    )
}


export default Ticker
