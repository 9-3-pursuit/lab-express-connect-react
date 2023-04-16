import React from 'react'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewLog() {
    const [newLog, setNewLog] = useState({
        captainName: "",
        title: "", 
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: "", 
    });
    let navigate = useNavigate()
    const API = process.env.REACT_APP_API_URL;

    function handleTextChange (event) {
        setNewLog({ ...newLog, [event.target.id]: event.target.value })
    }

    function handleCheckboxChange () {
        setNewLog({ ...newLog, mistakesWereMadeToday: !newLog.mistakesWereMadeToday})
    }

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${API}/logs`, newLog)
        .then(() => {
            navigate("/logs");
        })
        .catch((error) => console.log("catch", error))
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Captain's Name</label>
            <input 
            onChange={handleTextChange} 
            type="text"
            id="captainName"
            />
            <label>Title</label>
            <input 
            onChange={handleTextChange} 
            type="text"
            id="title"
            />
            <label>Post:</label>
            <input 
            onChange={handleTextChange} 
            type="text"
            id="post"
            />
            <label>Days Since Last Crisis</label>
            <input 
            onChange={handleTextChange} 
            type="number"
            id="mistakesWereMadeToday"
            />
            <label>Mistakes were made today</label>
            <input 
            onChange={handleCheckboxChange} 
            type="checkbox"
            id="daysSinceLastCrisis"
            />
            <input type="submit"/>
        </form>
    </div>
  )
}

export default NewLog