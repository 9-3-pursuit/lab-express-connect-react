import { useState, useEffect } from "react";
import { useParams, Link , useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();

  const [log, setLog] = useState({
    "captainName": "",
    "title": "",
    "post": "",
    "mistakesWereMadeToday": false,
    "daysSinceLastCrisis": 0,
  });

  const navigate = useNavigate()

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((response) => {
      setLog(response.data);
    })
    .catch((e) => console.log(e));
}, [index]);


  const handleSubmit = (event) => {
    event.preventDefault();
    axios
    .put(`${API}/logs/${index}`, log)
    .then((response) => {
      setLog(response.data);
      navigate(`/logs/${index}`);
    })
    .catch((c) => console.log(c));
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={log.title}
          
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
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

export default LogEditForm;
