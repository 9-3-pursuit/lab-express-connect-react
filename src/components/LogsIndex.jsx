import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogsIndex() {
    const [log, setLog] = useState([]);
    const API = process.env.REACT_APP_API_URL;
    const { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/logs/${index}`)
        .then((res) => {
            setLog(res.data);
        })
        .catch(() => {
            navigate("/not-found");
        });
    }, []);

    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then(() => {
            navigate("/logs")
        })
        .catch((error) => console.error(error))
    }

  return (
    <div>
        <h1>Show</h1>
        <div>
            <p>{`${log["title"]} - By ${log["captainName"]}`}</p>
            <p>{`${log["post"]}`}</p>
            <p>{`Days since last crisis: ${log["daysSinceLastCrisis"]}`}</p>
        </div>
        <div>
            <button><Link to="/logs">Back</Link></button>
            <button><Link to={`/logs/${index}/edit`}>Edit</Link></button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  )
}

export default LogsIndex