import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <Link to="/">Captain's Log</Link>
        <button>
          <Link to="/logs/new">New Log</Link>
        </button>
      </ul>
    </nav>
  );
}
export default NavBar;
