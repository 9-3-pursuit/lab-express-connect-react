import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col max-w-4xl mx-auto mt-16 text-center items-center gap-6">
      <h1 className=" text-xl">Welcome to the Captains Log</h1>
      <Link to="/logs">
        <buton className="max-w-fit p-2 border-blue-600 border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-100">
          See Logs
        </buton>
      </Link>
    </main>
  );
}
