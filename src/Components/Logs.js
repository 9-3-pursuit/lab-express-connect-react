import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowLogs from "./ShowLogs";

export default function Logs() {
    const [logs, setLogs] = useState([]);
    // const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios
        .get("http://localhost:3333/logs")
        .then((res) => {
            setLogs(res.data);
            // setLoaded(true); 
            console.log(logs)
            console.log(res.data)
        })
        .catch((err) => console.log(err));
    }, []);

    return (
        <div>
            <h2>All Logs</h2>
            <section className="all-logs">
                 {logs.map((log,i) =>  <ShowLogs log={log} index={i} key={i} />)} 
             
          </section>
        </div>
    );
  
}