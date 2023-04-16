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
      navigate("/logs")
    })
    .catch((e) => {
      console.log(e)
    });
  };
  return (
    <div className="New">
        <h1>Captain's Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" >Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
        />
        <label htmlFor="title">Title:
        <input
          id="title"
          type="text"
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        </label>
        <form>
        <label htmlFor="post">Post:
        <textarea
          id="post"
          type="text"
          value={log.post}
          placeholder="Post"
          onChange={handleTextChange}
        />
        </label>
        </form>
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        </label>
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          type="number"
          placeholder="Days Since Last Crisis"
        />
        </label>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;
