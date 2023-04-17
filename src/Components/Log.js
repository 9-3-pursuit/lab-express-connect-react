import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const API = process.env.REACT_APP_API_URL;

function Log({ log, index }) {
  const [logs, setLogs] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) => 
        setLogs(response.data))
      .catch((e) => console.error("catch", e));
  }, []);
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>💥</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
       {log.captainName}
      </td>
      <td>
         <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default Log;
