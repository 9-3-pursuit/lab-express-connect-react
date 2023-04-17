import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function LogEditForm() {
  let { index } = useParams();

  const [log, setLog] = useState({
    name: "",
    url: "",
    Post: "",
    description: "",
    daysSinceLastCrisis: false,
  });

  let navigate = useNavigate();
  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setLog(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch
      .put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
      .then((res) => {
        setLog(res.data);
        navigate(`/logs/${index}`);
      })
      .catch((error) => {
        console.log(error);
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
          required
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />

        <input type="submit" />
      </form>
      <button>
        <a href={"/logs"}>Back</a>
      </button>
    </div>
  );
}

export default LogEditForm;
