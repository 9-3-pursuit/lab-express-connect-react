import { useEffect, useState } from "react";
import axios from "axios";
import Log from "./Log";

const URL = process.env.REACT_APP_API_URL;

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/logs`).then((res) => {
      setLogs(res.data);
    });
  }, []);

  return (
    <div className="Logs">
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes made?</th>
              <th>See this Log</th>
              <th>Edit Log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
export default Logs;
