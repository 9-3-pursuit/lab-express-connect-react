import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./Log";
const API = process.env.REACT_APP_API_URL;

export default function LogsIndex() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => {
        console.log(response.data);
        setLogs(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="logs">
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
            {logs.map((log, i) => {
              return <Log key={i} log={log} i={i} />;
            })}
          </tbody>
        </table>
      </section>
      
    </div>
  );
}