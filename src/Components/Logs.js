import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const fetchLogs = async () => {
      const response = await fetch("http://localhost:3005/logs");
      const data = await response.json();
      setLogs(data);
    };

    fetchLogs();
  }, []);
  return (
    <div>
      <h1>See Logs</h1>
      <ul className="grid grid-cols-3 mt-16 px-12">
        {logs.map((log, index) => (
          <li key={log.index} className="Log flex flex-col border rounded-md">
            <Link to={`/logs/${index}`}>
              <h2>{log.title}</h2>
              <h3>{log.captainName}</h3>
              <p>{log.daysSinceLastCrisis} days since last crisis</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
