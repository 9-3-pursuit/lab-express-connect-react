import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditLogForm() {
  let { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: "false",
    daysSinceLastCrisis: "",
  });
  let navigate = useNavigate();
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/bookmarks/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((e) => {
        console.log(e);
      });
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
          placeholder="Name of Captain"
          required
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
          value={log.post}
          onChange={handleTextChange}
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <textarea
          id=" daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="ex:0"
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes Were Made Today:</label>
        <input
          id=" mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />

        <br />
        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Back</button>
      </Link>
    </div>
  );
}
