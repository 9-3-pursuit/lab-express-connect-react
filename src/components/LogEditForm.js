import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

const LogEditForm = () => {
    let { index } = useParams();

    const [log, setLog] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: 0,
    });
  
    let navigate = useNavigate();
  
    const handleTextChange = (event) => {
      if (event.target.id === "crisis") {
        let days = parseInt(event.target.value);
        if (days < 0) {
          days = 0;
        }
        let currentDate = new Date();
        let lastCrisisDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
        setLog({ ...log, daysSinceLastCrisis: days, lastCrisisDate: lastCrisisDate });
      } else {
        setLog({ ...log, [event.target.id]: event.target.value });
      }
    };
    
    const handleCheckboxChange = (event) => {
      setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };
  
    useEffect(() => {
      axios
        .get(`${URL}/logs/${index}`)
        .then((res) => {
          setLog(res.data);
        })
        .catch((error) => console.log(error));
    }, [index]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .put(`${URL}/logs/${index}`, log)
        .then((res) => {
          setLog(res.data);
          navigate(`/logs/${index}`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div className="edit-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          placeholder="Title"
          required
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleTextChange}
          rows="5" // adjust this value to set the number of rows
          cols="50" // adjust this value to set the number of columns
          placeholder="Post"
          required
        />
  
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder="0"
          required
        />
        <br />
  
        <button onClick={() => navigate(-1)}>Back</button>
        <input type="submit" />
      </form>
    </div>
  );
  
  
};

export default LogEditForm;
