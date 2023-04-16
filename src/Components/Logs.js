import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      {logs.map((log, index) => {
        return (
          <div key={index}>
            <Link to={`/logs/${index}`}>
              <h1>
                {log.title} - By {log.captainName}{" "}
              </h1>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Logs;
