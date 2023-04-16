import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar(){
    return (
      <div className="navbar">
        <h1><Link to={'/logs'}>Captain's Log</Link></h1>
        <button>
          <Link to={`/logs/new`}>
            New Log
          </Link>
          </button>
      </div>
      
      
    )
  }
  
  export default NavBar;