
import { Link } from "react-router-dom";
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
        let depth2 = `${55 - (mouseX - w) * 0.002}% ${50 - (mouseY - h) * 0.002}%`;
        let depth3 = `${50 - (mouseX - w) * 0.004}% ${50 - (mouseY - h) * 0.004}%`;
        let depth4 = `${50 - (mouseX - w) * 0.006}% ${50 - (mouseY - h) * 0.006}%`;
        let depth5 = `${60 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
        let x = `${depth5}, ${depth4}, ${depth3}, ${depth2}, ${depth1}`;
        console.log(el.style.backgroundPosition);
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
