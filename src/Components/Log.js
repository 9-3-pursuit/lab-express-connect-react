import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowLogs from "./ShowLog";

export default function Logs() {
    const [logs, setLogs] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/logs`)
        .then((res) => {
            setLogs(res.data);
            setLoaded(true); 
           
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
