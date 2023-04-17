import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogEditForm () {
    let { index } = useParams();
    const navigate = useNavigate();
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
      };

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
      };
    

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`).then((res) => {
      setLog(res.data);
    }).catch((e) => {
      console.log(e)
    })
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`${process.env.REACT_APP_API_URL}/logs/${index}`, log)
    .then((res) => {
      setLog(res.data)
      navigate(`/logs/${index}`)
    }).catch((e) => {
      console.log(e)
    })
  };

    return(
        <div className="Edit">
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
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
      <div>
            {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
    </div>
  );
}