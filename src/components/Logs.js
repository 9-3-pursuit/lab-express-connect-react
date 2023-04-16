import { useState, useEffect } from "react";
import "./Logs.css"
import Log from "./Log";
import axios from "axios";


function Logs() {
  const [logs, setLogs] = useState();


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/logs`).then((res) => {
      setLogs(res.data);
    });

  }, []);

    return (
      <>
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
      </>
      
    )
  }
  
  export default Logs;