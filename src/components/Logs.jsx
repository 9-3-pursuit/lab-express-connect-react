import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Logs() {
  const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/logs`)
        .then((res) => {
            setLogs(res.data);
        })
        .catch((error) => {console.log("catch",error)})
      }, []);

  return (
    <div className="Log">
      <table>
        <thead>
      <tr>
        <th scope="col">Mistakes</th>
        <th scope="col">Captain Name</th>
        <th scope="col">See this log</th>
    </tr>
    </thead>
    <tbody>
        {logs ? logs.map((log, index) => 
          <tr key={index}>
            <td>{log.mistakesWereMadeToday ? <Link key={index} to={`/logs/${index}`}>True</Link> : <Link key={index} to={`/logs/${index}`}>False</Link>}</td>
            <td><Link key={index} to={`/logs/${index}`}>{log.captainName} </Link></td>
            <td><Link key={index} to={`/logs/${index}`}>{log.title} </Link></td>
          </tr>
): null}
 </tbody>
      </table>
    </div>
  )
}

export default Logs