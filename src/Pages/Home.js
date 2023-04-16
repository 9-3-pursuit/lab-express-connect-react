import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1> Welcome to the Captains Log</h1>
      <Link to="/logs">
        <button>See Logs</button>
      </Link>
    </div>
  );
}

export default Home;
