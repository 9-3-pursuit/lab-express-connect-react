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
      let days = parseInt(event.target.value);//convert to integer
      if (days < 0) {// avoids neg values
        days = 0;
      }
      let currentDate = new Date();//creates a new date object set to current date
      let lastCrisisDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);//calculate new date using miiliseconds in days 
      setLog({ ...log, daysSinceLastCrisis: days, lastCrisisDate: lastCrisisDate });
    } else {
      setLog({ ...log, [event.target.id]: event.target.value });//spread operator used to copy object and update the state of log with new crisis value
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

        <label htmlFor="mistakes">Mistakes were made today</label>
        <input
          id="mistakes"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="crisis">Days since last crisis</label>
        <input
          id="crisis"
          value={log.daysSinceLastCrisis}
          type="number"
          onChange={handleTextChange}
          placeholder={0}
          required
        />
        <br />
        <input type="submit"/>
        
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind</button>
      </Link>
    </div>
  );
};

export default LogEditForm;
