import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function LogDetails() {
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
    axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`).then(() => {
      navigate("/logs");
    });
  };
  return (
    <article>
      <h1>
        {log.title} - By {log.captainName}
      </h1>
      <h5>
        <span> {log.post}</span>
        <span> "Days since last crisis: {log.daysSinceLastCrisis}</span>
      </h5>
      <h6>{log.category}</h6>
      <p>{log.description}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
  );
}
