import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <main className="min-h-screen flex flex-col max-w-4xl mx-auto mt-16 text-center items-center gap-6">
      <h1 className=" text-3xl font-semibold">Lost?</h1>
      <p>
        It looks like this page doesn't exsist - please check the URL and try
        again
      </p>
      <ul className=" list-disc"></ul>
      <Link to="/logs">
        <buton className="max-w-fit p-2 border-blue-600 border rounded-md cursor-pointer hover:bg-blue-600 hover:text-white transition-colors duration-100">
          Back to the Logs
        </buton>
      </Link>
    </main>
  );
}
