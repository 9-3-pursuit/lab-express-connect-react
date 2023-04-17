import { useEffect, useState } from "react";
import { useParams, Link , useNavigate} from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
    const [log, setLog] = useState({});
    const { index } = useParams();
    const navigate = useNavigate()
    useEffect(() => {
      axios
        .get(`${API}/logs/${index}`)
        .then((response) => {
          setLog(response.data);
        })
        .catch((e) => console.log(e));
    }, [index]);
  
    function handleDelete() {
        axios
      .delete(`${API}/logs/${index}`)
      .then((response) => {
        navigate("/logs");
      })
      .catch((e) => console.log(e));
    }

  return <div className="log">
    <div className="logCard">
        <h1>
          {log.title} - By {log.captainName}
        </h1>
        <p>{log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>Mistakes made today: {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
      </div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
  </div>;
}