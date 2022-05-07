import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function AboutMe() {

    useEffect(() => {
        (function () {

            const menuButton = document.querySelector(".menu-button");
            const overlay = document.querySelector(".menu-overlay");
            menuButton.addEventListener("click", menuButtonClick);

            let menuIsOpen = false;
            function menuButtonClick() {
                menuIsOpen = !menuIsOpen
                if (menuIsOpen) {
                    overlay.style.transform = "translateY(0%)";
                    menuButton.classList.add("close");
                } else {
                    overlay.style.transform = "translateY(-100%)";
                    menuButton.classList.remove("close");
                }
            }

        })();
    }, []);

    return (
        <div className="App">
            <div className="menu-button">
                <div className="button-line"></div>
                <div className="button-line"></div>
            </div>
            <header className="Navbar-header">
                <div className="nav-name"></div>
            </header>
            <div className="menu-overlay">
                <ul className="menu-list">
                    <li><Link className="menu-link" to="/">HOME</Link></li>
                    <li><Link className="menu-link" to="/MyProjects">PROJECTS</Link></li>
                    <li><Link className="menu-link" to="/AboutMe">ABOUT ME</Link></li>
                    <li><Link className="menu-link" to="/ContactMe">CONTACT</Link></li>
                </ul>
            </div>
            <header className="App-header">
                <h2>
                    My Projects
                </h2>
            </header>
        </div>
    );
}