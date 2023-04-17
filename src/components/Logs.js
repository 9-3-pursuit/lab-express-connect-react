import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Log from "./Log";

const URL = process.env.REACT_APP_API_URL;

const Logs = () => {
  const { index } = useParams();

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
              <th>Captain Name</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return (
                <tr key={index}>
                  <td>{log.mistakesMade ? "Yes" : "No"}</td>
                  <td>
                    <a href={`/log/${log.id}`}>View Log</a>
                  </td>
                  <td>
                    <a href={`/log/${log.id}/edit`}>Edit Log</a>
                  </td>
                  <td>{log.captainName}</td>
                  <td>
                    <a href={`/log/${log.id}`}>Link</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Logs;
