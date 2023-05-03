import bicycle from './gifs/bike-stationary-westward.gif';
import flame from './gifs/Fire-bicycle-project.gif';
import carbon from './gifs/carbonDioxide.gif';
import odometer from './gifs/odometer-cycle-app-project-2.gif';
import money from './gifs/money-coins-stack.gif';
import weather from './gifs/sun-rain-weather-pixel.gif';
import factory from './gifs/smoke-stack.gif';
import './Ticker.css';


function Ticker() {
  return(
    <>
  <div className="news-container"></div>
  <div className="hwrap">
  <div className="hmove">
  <div className="hitem"><a href="ticker.html"><img src={bicycle} height="50px" width="100px"></img></a>Progress:</div>
  <div className="hitem"><a href="ticker.html"><img src={flame} height="60px" width="100px"></img></a><div>Calories:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={carbon} height="60px" width="100px"></img></a><div>Carbon Saved:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={odometer} height="60px" width="100px"></img></a><div>KMS Travelled:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={money} height="60px" width="100px"></img></a><div>Money Saved:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={weather} height="60px" width="100px"></img></a><div>Weather:</div></div>
  <div className="hitem"><a href="ticker.html"><img src={factory} height="60px" width="100px"></img></a><div>Air Quality:</div></div>
</div></div>
    
    
</>
    )
}


export default Ticker
