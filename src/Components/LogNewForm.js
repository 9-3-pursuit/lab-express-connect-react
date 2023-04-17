import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const [log, setLog] = useState({
    "captainName": "",
    "title": "",
    "post": "",
    "mistakesWereMadeToday": false,
    "daysSinceLastCrisis": 0,
  });
  
  const navigate = useNavigate();

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then(
      () => {
      navigate(`/logs`);
      })
      .catch((e) => console.log(e));
    
    
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder=""
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
            <label htmlFor="daysSinceLastCrisis">Days since Last Crisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
    
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
