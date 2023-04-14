import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";

export default function Logs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // axios method˝
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs`)
      .then((res) => {
        setLogs(res.data);
      })
      .catch((e) => console.log(e));
    // fetch method
    // fetch(`${process.env.REACT_APP_API_URL}/logss`)
    //   .then((res) => res.json())
    //   .then((data) => {x
    //     setLogs(data);
    //   });
  }, []);

  return (
    <div className="Logs">
      <section>
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
                console.log(log)
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
