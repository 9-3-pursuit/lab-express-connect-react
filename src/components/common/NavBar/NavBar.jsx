import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>Captain's Log</li>
        <li>
          <Link to="/logs">Back</Link>
        </li>
        <li>
          <Link to="/logs/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
