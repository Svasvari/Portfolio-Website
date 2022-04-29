
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          SEAN VASVARI
        </h2>
        <Link to="/AboutMe">About Me</Link>
        <Link to="/Projects">My Projects</Link>
        <Link to="/ContactMe">Contact Me</Link>
      </header>
    </div>
  );
}

export default App;
