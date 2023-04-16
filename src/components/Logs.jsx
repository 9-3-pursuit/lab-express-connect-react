import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Logs() {
  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios.get(`${API}/logs`)
        .then((res) => {
            setLogs(res.data);
        })
        .catch((error) => {console.log("catch",error)})
      }, []);

  return (
    <div className="Log">
      {logs ? logs.map((log, index) => 
      <Link key={index} to={`/logs/${index}`}>{log.title}</Link>
      ): null}
    </div>
  )
}

export default Logs