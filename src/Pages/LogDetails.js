import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams(); //getting index from URL
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
      <div>
        <h1>Captain's Log</h1>
        <section className="florence">
      {/* <a href={bookmark.url}>{bookmark.name}</a> */}
            <h2>Captain's Name: {log.captainName}</h2>
            <h2>Days since last crisis: {log.daysSinceLastCrisis}</h2>
            <h2>Mistake were made today: {log.mistakesWereMadeToday ? "true" : "false"}</h2>
            <h2>Post: {log.title} {log.post}</h2>
            <h2>Title: {log.title} - By {log.captainName}</h2>
            </section>
            <div className="showNavigation">
              <div>
              {" "}
              <Link to={`/logs`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
              {" "}
              <span>
           <a href={log.url}>{log.name}</a>
         </span>{" "} 
              <Link to={`/logs/${index}/edit`}>
               <button>Edit</button> 
               
              </Link>
            </div>
            <div>
              {" "}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
       
        </div>
      );
    }
  
    
    