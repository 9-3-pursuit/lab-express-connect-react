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
            <table>
                <thead>
                    <tr>
                        <th scope="col">Mistakes</th>
                        <th scope="col">Captain Name</th>
                        <th scope="col">See this log</th>
                    </tr>
                </thead>

                    <tbody>
            {logs.map((log, index) => {
                return <tr key={index}>
                    <td>{log.mistakesWereMade ? true : false}</td>
                    <td>{log.captainName}</td>
                    <td><Link to='/logs'>{log.title}</Link></td>
                </tr>

             
            })}
                </tbody>
                
                </table>
        </div>
    )
        
    
}

export default Logs