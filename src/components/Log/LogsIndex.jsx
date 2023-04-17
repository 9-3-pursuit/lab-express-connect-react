import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLogs } from "../../utils/api";

const LogsIndex = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setLogs(await fetchLogs());
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <h1>All Logs</h1>
      <ul>
        {logs.map((log) => (
          <li key={log._id}>
            <Link to={`/logs/${log._id}`}>{log.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsIndex;
