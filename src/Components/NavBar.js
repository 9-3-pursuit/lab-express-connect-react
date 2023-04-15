import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="w-full px-4 h-16 bg-blue-700 shadow-md flex items-center justify-between">
      <Link to="/">
        <h1 className="text-3xl text-white">Captains Log</h1>
      </Link>
      <button className="text-white rounded-md p-2 border-white border hover:bg-white hover:text-blue-700 hover:cursor-pointer">
        New Log
      </button>
    </nav>
  );
}
