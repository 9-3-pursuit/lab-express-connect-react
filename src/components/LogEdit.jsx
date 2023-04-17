import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogEdit() {
    const [editLog, setEditLog] = useState({
        captainName: "",
        title: "", 
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "", 
    });
    const { index } = useParams();
    let navigate = useNavigate();
    function handleTextChange (event) {
        setEditLog({ ...editLog, [event.target.id]: event.target.value })
    }

    function handleCheckboxChange () {
        setEditLog({ ...editLog, mistakesWereMadeToday: !editLog.mistakesWereMadeToday})
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res) => {
            setEditLog(res.data);
        })
        .catch((error) => {console.log("catch",error)})
      }, []);

      function handleSubmit(event) {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, editLog)
        .then(() => {
            navigate(`/logs/${index}`);
        })
        .catch((error) => console.warn("catch", error));
      }

  return (
    <div>
        <h1>Edit</h1>
        <form onSubmit={handleSubmit}>
            <label>Captain's Name</label>
            <input 
            onChange={handleTextChange} 
            type="text"
            value={editLog.captainName}
            id="captainName"
            />
            <label>Title</label>
            <input 
            onChange={handleTextChange} 
            type="text"
            value={editLog.text}
            id="title"
            />
            <label>Post:</label>
            <textarea 
            onChange={handleTextChange}
            value={editLog.post} 
            id="post"
            />
            <label>Days Since Last Crisis</label>
            <input 
            onChange={handleTextChange} 
            type="number"
            value={editLog.daysSinceLastCrisis}
            id="daysSinceLastCrisis"
            />
            <label>Mistakes were made today</label>
            <input 
            onChange={handleCheckboxChange} 
            type="checkbox"
            value={editLog.mistakesWereMadeToday}
            id="mistakesWereMadeToday"
            />
            <input type="submit"/>
        </form>
        <button><Link to="/logs">Back</Link></button>
    </div>
  )
}

export default LogEdit