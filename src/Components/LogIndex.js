import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LogsIndex() {
  const { index } = useParams();
  const [selectedLog, setSelectedLog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogs = async () => {
      const response = await fetch(`http://localhost:3005/logs/${index}`);
      const data = await response.json();
      setSelectedLog(data);
    };

    fetchLogs();
  }, [index]);

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3005/logs/${index}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.status === 200) {
      navigate("/logs");
    }
  };

  return (
    <main className="min-h-screen pt-16">
      <h1 className=" text-5xl">Show</h1>
      <div className=" flex justify-center items-center">
        <div className="p-5 h-1/2 w-1/2 border rounded-md flex flex-col items-center space-y-3">
          <h1 className="text-2xl">
            {selectedLog.title} - By {selectedLog.captainName}
          </h1>
          <p className="text-sm">{selectedLog.post}</p>
          {selectedLog.mistakesWereMadeToday && <p>Mistakes were made today</p>}
          <p>Days since last crisis: {selectedLog.daysSinceLastCrisis} </p>
          <div className="flex justify-around w-full">
            <Link to={"/logs"}>
              <button className="border p-2 rounded-md">Back to Logs</button>
            </Link>
            <Link to={`/logs/${index}/edit`}>
              <button className="border p-2 rounded-md">Edit Log</button>
            </Link>
            <button className="border p-2 rounded-md" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
