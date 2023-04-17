import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogEditForm() {
  let { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
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
    // refer down after export to fetch instead of axios
    axios
      .put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
      .then(() => navigate(`/logs/${index}`));
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
        />{" "}
        <br /> <br />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />{" "}
        <br /> <br />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
        />{" "}
        <br /> <br />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />{" "}
        <br /> <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />{" "}
        <br /> <br />
        <input type="submit" />
      </form>
      <button>
        <Link to="/logs">Back</Link>
      </button>
    </div>
  );
}

export default LogEditForm;

/* Do not delete - this is fetch -- above we used axios for a change */

// fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(log),
// })
// console.log(log)
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json();
//   })
//   .then((data) => {
//     setLog(data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
// navigate(`/logs/${index}`);
