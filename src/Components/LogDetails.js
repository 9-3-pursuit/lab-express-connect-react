import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams(); //getting index from URL
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setLog(data);
        console.log(data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/logs/${index}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/logs");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <article>
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <p>{log.post}</p>
        <p>
          <strong>Days since last crisis:</strong> {log.daysSinceLastCrisis}
        </p>
      </article>
      <div className="showNavigation">
        <div>
          <button>
            <Link to="/logs">Back</Link>
          </button>
        </div>
        <div>
          <button>
            <Link to={`/logs/${index}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default LogDetails;
