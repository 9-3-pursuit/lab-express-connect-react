import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/logs">Captain's Log</Link>
        </li>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
