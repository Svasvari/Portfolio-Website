
import { Link } from "react-router-dom";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    (function () {
      document.addEventListener("mousemove", parallax);
      const el = document.querySelector("#logo")

      function parallax(e) {
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2;
        let mouseX = e.clientX;
        let mouseY = e.clientY;
        let depth1 = `${50 - (mouseX - w) * 0.001}% ${50 - (mouseY - h) * 0.001}%`;
        let depth2 = `${55 - (mouseX - w) * 0.002}% ${50 - (mouseY - h) * 0.002}%`;
        let depth3 = `${50 - (mouseX - w) * 0.004}% ${50 - (mouseY - h) * 0.004}%`;
        let depth4 = `${50 - (mouseX - w) * 0.006}% ${50 - (mouseY - h) * 0.006}%`;
        let depth5 = `${50 - (mouseX - w) * 0.008}% ${50 - (mouseY - h) * 0.008}%`;
        let depth6 = `${60 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`;
        let x = `${depth6}, ${depth5}, ${depth4}, ${depth3}, ${depth2}, ${depth1}`;
        el.style.backgroundPosition = x;
      }

      const menuButton = document.querySelector(".menu-button");
      const overlay = document.querySelector(".menu-overlay");
      menuButton.addEventListener("click", menuButtonClick);

      let menuIsOpen = false;
      console.log(menuIsOpen, "first")
      function menuButtonClick() {
        menuIsOpen = !menuIsOpen
        console.log(menuIsOpen, "second")
        if (menuIsOpen) {
          overlay.style.transform = "translateY(0%)";
          menuButton.classList.add("close");
        } else {
          overlay.style.transform = "translateY(-100%)";
          menuButton.classList.remove("close");
        }
      }

      const homeLink = document.querySelector("#home-link");
      homeLink.addEventListener("click", homeLinkClick);

      function homeLinkClick() {
        menuIsOpen = false;
        overlay.style.transform = "translateY(-100%)";
        menuButton.classList.remove("close");
      }

    })();
  }, []);

  return (
    <div className="main-container">
      <div className="menu-button">
        <div className="button-line"></div>
        <div className="button-line"></div>
      </div>
      <header className="Navbar-header">
        <div className="nav-name"></div>
      </header>
      <div className="menu-overlay">
        <ul className="menu-list">
          <li><Link className="menu-link" id="home-link" to="/">HOME</Link></li>
          <li><Link className="menu-link" to="/MyProjects">PROJECTS</Link></li>
          <li><Link className="menu-link" to="/AboutMe">ABOUT ME</Link></li>
          <li><Link className="menu-link" to="/ContactMe">CONTACT</Link></li>
        </ul>
      </div>
      <div className="home-main-container">
        <div className="name-container">
          <h2>Sean</h2>
          <h2>Vasvari</h2>
        </div>
        <div id="logo" className="logo-container">
        </div>
      </div>
    </div>

  );
}

export default App;
