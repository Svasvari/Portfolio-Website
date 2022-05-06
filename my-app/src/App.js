
import { Link } from "react-router-dom";
import sun from './Media/sun.png';
import cloudsForeground from './Media/clouds-foreground.png';
import cloudsRear from './Media/clouds-rear.png';
import sunRays from './Media/sun-rays-circle.png';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    (function () {
      document.addEventListener("mousemove", parallax);
      const el = document.querySelector("#logo")
      console.log(el)

      function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50 - (mouseX - w) * 0.001}% ${50 - (mouseY - h) * 0.001}%`;
        let depth2 = `${50 - (mouseX - w) * 0.002}% ${50 - (mouseY - h) * 0.002}%`;
        let depth3 = `${50 - (mouseX - w) * 0.004}% ${50 - (mouseY - h) * 0.004}%`;
        let depth4 = `${50 - (mouseX - w) * 0.006}% ${50 - (mouseY - h) * 0.006}%`;
        let x = `${depth4}, ${depth3}, ${depth2}, ${depth1}`;
        console.log(x);
        el.style.backgroundPosition = x;
      }
    })();
  }, []);

  return (
    <div className="home-main-container">
      <div className="name-container">
        <h2>Sean</h2>
        <h2>Vasvari</h2>
      </div>
      <div id="logo" className="logo-container">
        <h2>PORTFOLIO</h2>
      </div>
    </div>
  );
}

export default App;
