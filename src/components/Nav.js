import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Captain's Logs</h1>
      </Link>
      
      <button>
        <Link to="/logs">View Logs</Link>
      </button>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
};

export default Nav;

