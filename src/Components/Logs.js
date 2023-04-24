import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/logs`)
            .then((res) => {
                setLogs(res.data);
            })
            .catch((e) => console.error("catch", e));
    }, []);



    return (
        <div className="Logs">
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
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs;