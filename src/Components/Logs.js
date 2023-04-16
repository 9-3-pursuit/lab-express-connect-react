import { useState, useEffect } from "react";
import Log from "./Log";

export default function Logs() {
    const [logArray, setLogArray ] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/logs`)
        .then((res) => res.json())
        .then(data => {
          setLogArray(data)
          console.log(data)
        })
      }, []);

    return(
        <div className="LogsIndex">
            <section>
                {logArray.map((log, index) => {
                    return <Log key={index} log={log} index={index}/>;
                })}
            </section>
        </div>
    )
};