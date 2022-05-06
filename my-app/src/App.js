
import { Link } from "react-router-dom";
import sun from './Media/sun.png';
import cloudsForeground from './Media/clouds-foreground.png';
import cloudsRear from './Media/clouds-rear.png';
import sunRays from './Media/sun-rays-circle.png';

function App() {
  return (
    <div className="home-main-container">
        <div className="name-container">
          <h2>Sean</h2>
          <h2>Vasvari</h2>
        </div>
        <div className="logo-container">
          <img src={sun} className="sun" alt="logo" />
          <img src={cloudsForeground} className="clouds-foreground" alt="logo" />
          <img src={cloudsRear} className="clouds-rear" alt="logo" />
          <img src={sunRays} className="sun-rays" alt="logo" />
        </div>
    </div>
  );
}

export default App;
