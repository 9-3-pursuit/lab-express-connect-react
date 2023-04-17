import { Link } from "react-router-dom"

export default function NavBar() {
  // const navigate = useNavigate();
  return (
    <div>
      <Link to="/">Captain's Log</Link>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </div>
  )
}