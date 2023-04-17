import { Link } from "react-router-dom";
import "./NavBar.css";

export default function Nav() {
  return (
    <header>
      <article>
        <h1>
          <Link to="/logs">
            Captain's Logs
          </Link>
        </h1>
      </article>
      <nav>
        <ul>
          
          <li>
            <Link to="/logs/newlog">New Log</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}