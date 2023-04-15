import { useState, useEffect } from "react"
import axios from "axios"

const Logs = () => {

    const [logs, setLogs] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3210/logs')
        .then(data => setLogs(data.data))
   })

    return (
        <div>
            {logs.map((log, index) => {
              return   <div key={index}>
                    <h1>Captain Name: {log.captainName}</h1>
                    <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
                    <p>Mistakes Were Made Today: {log.mistakesWereMadeToday}</p>
                    <p>Post: {log.post}</p>
                    <p>Title: {log.title}</p>
               </div>
            })}
        </div>
    )
        
    
}

export default Logs