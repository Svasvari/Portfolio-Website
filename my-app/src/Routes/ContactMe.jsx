import { Link } from "react-router-dom";

export default function AboutMe() {
    return (
        <div className="App">
            <header className="App-header">
                <h2>
                    Contact Me
                </h2>
                <Link to="/">Home</Link>
            </header>
        </div>
    );
}