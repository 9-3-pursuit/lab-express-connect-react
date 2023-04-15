import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <Link to="/">
          <li> All Logs </li>{" "}
        </Link>
        <Link to="/NewLog">
          <li> New Log</li>{" "}
        </Link>
      </ul>
    </div>
  );
}
export default NavBar;
