import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogDetails (){
    const [log, setLog] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res) => {
          setLog(res.data);
        }).catch(() => {
          navigate("/not-found")
        });
      }, [index, navigate]);
    
      const handleDelete = () => {
        axios
        .delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then(() => {
          navigate(`/logs`)
        })
      };

    return(
        <>
        <div className="LogDetails">
            <h1>Show</h1>
        <h2>Captain Name: {log.captainName}</h2>
        <h5>Title: {log.title} - By {log.captainName}</h5>
        <h5>Post: {log.post}</h5>
        <h5>Mistakes Made Today?: {log.mistakesWereMadeToday ? "True" : "False"}</h5>
        <h5>Days since last crisis: {log.daysSinceLastCrisis}</h5>
        </div>
        <div>
            {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
        {" "}
            <button onClick={handleDelete} className="Delete">Delete</button>
        </div>
        <div>
            {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        </>
    )
}