
import { Link } from "react-router-dom";
import hamburger from "./Media/hamburger-menu.png";

function App() {
  return (
    <div className="Navbar">
      <header className="Navbar-header">
        <h2>
          Sean Vasvari
        </h2>
        <img src={hamburger} className="hamburger" alt="logo" />
      </header>
    </div>
  );
}

export default App;