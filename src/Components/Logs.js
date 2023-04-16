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
      <div className="bg-[#EDFAFC] mx-40 rounded-xl px-10 py-8 shadow-[3px_3px_10px]">
        <div className="grid grid-cols-3 gap-x-1 justify-items-center items-center h-14">
          <div className="border-b-2 h-14 w-full flex justify-center items-center">
            <h2 className="font-bold">Mistakes</h2>
          </div>
          <div className="border-b-2  h-14 w-full flex justify-center items-center">
            <h2 className="font-bold">Captain Name</h2>
          </div>
          <div className="border-b-2  h-14 w-full flex justify-center items-center">
            <h2 className="font-bold">See this log</h2>
          </div>
        </div>
        <div >
          {logs.map((log, index) => {
            return <Log key={index} log={log} index={index} />;
          })}
        </div>
      </div>
    );
}