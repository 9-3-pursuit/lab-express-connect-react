import { Link } from "react-router-dom";
export default function NavBar() {
    return (
      <nav className="bg-[#03243D] h-28 w-full flex justify-between items-center px-4">
        <h1 className="text-[#E4D1CF] text-5xl">
          <Link to="/logs">Captain's Log</Link>
        </h1>
        <button className="text-[#C6BABD] text-xs font-bold border-[#C6BABD] border h-10 w-32 rounded">
          <Link to="/logs/new">NEW LOG</Link>
        </button>
      </nav>
    );
}