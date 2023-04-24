import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav>
            <h1 className="Main-Link">
                <Link to="/logs" className="H1-Link">Logs</Link>
            </h1>
            <button>
                <Link to="/logs/new">New Log</Link>
            </button>
        </nav>
    )
};