import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";

export default function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get((`${process.env.REACT_APP_API_URL}/logs`))
            .then((res) => {
                setLogs(res.data)
            }).catch((e) => {
                console.log(e);
            })
    }, [])

    return (
      <div className="bg-[#EDFAFC] mx-40 rounded-xl">
        <div className="grid grid-cols-3 justify-items-center">
          <h2 className="font-bold">Mistakes</h2>
          <h2 className="font-bold">Captain Name</h2>
          <h2 className="font-bold">See this log</h2>
        </div>
        {logs.map((log, index) => {
          return <Log key={index} log={log} index={index} />;
        })}
      </div>
    );
}