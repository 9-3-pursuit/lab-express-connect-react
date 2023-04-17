import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogNewForm() {
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
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
      .post(`${process.env.REACT_APP_API_URL}/logs`, log) 
      .then(() => {
        navigate("/logs"); 
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="New">
       <form onSubmit={handleSubmit}>
        <label htmlFor="captainName"><strong>Captain's Name:</strong></label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          required
        />
        <label htmlFor="title"><strong>Title:</strong></label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post"><strong>Post:</strong></label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis"><strong>Days Since Last Crisis:</strong></label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
         <label htmlFor="mistakesWereMadeToday"><strong>Mistakes were made today:</strong></label>
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