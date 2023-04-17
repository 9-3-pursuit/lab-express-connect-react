import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Log from "./Log";

function Logs() {
  const [logs, setLogs] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/logs`)
      .then((res) => res.json())
      .then((data) => {
        setLogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Mistakes</th>
            <th>Captain Name</th>
            <th>See this log</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
