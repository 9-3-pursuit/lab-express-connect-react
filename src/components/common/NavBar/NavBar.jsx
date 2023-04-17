import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Captain's Log</Link>
        </li>
        <li>
          <Link to="/logs">All Logs</Link>
        </li>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
