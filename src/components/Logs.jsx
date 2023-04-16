import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const Logs = () => {

    const [logs, setLogs] = useState([])
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/logs`)
        .then(data => setLogs(data.data))
   },[])

    return (
        <div>
            {logs.map((log, index) => {
              return   <div key={index}>
                  <Link to={`/logs/${index}`}>
                      <h1>{log.title} - By {log.captainName}</h1>
                  </Link>
               </div>
            })}
        </div>
    )
        
    
}

export default Logs