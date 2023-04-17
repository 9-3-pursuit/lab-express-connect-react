import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchLogs } from "../../utils/api";

const Log = ({ log, index }) => {
  return (
    <tr key={index} className="Log">
      <td>{log.mistakesWereMadeToday ? "Yes" : "No"}</td>
      <td>{log.captainName}</td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
};

const LogsIndex = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setLogs(await fetchLogs());
    };
    fetchAPI();
  }, []);

  return (
    <div className="index">
      <h1>Index</h1>
      <table className="table-container">
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>Log</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            console.log(`${log.name}`);
            return <Log log={log} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LogsIndex;
