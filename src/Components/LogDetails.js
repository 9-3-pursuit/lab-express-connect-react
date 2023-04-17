import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./LogDetails.css"
import axios from "axios";

function LogDetails() {
  const [log, setLog] = useState([]);
    let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((response) => {
        console.log(response);
        setLog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then(() => {
        navigate("/logs");
      });
  };

  return (
    <div className="LogDetails">
      <article>
        {/* <h2>Captain Name: {log.captainName}</h2>  */}
        <h2> {log.title} - By {log.captainName}</h2>
        <p><strong>Post:</strong> {log.post}</p>
        <p><strong>Mistakes Made Today?</strong> {log.mistakesWereMadeToday ? "True" : "False"}</p>
        <p><strong>Days since Last Crisis:</strong> {log.daysSinceLastCrisis}</p>
      </article>
    <div className="showNavigation">
    <div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
    </div>
    <div>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
    </div>
    </div>
  );
}

export default LogDetails;
