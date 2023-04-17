import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/logs">
          <h1>Captain's Log</h1>
        </Link>
        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </ul>
    </nav>
  );
}
export default NavBar;
