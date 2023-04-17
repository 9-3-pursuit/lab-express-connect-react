import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";


const URL = process.env.REACT_APP_API_URL
const LogDetails = () => {
    const [log, setLog] = useState({});
    let { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${URL}/logs/${index}`)
        .then((res) => {
            setLog(res.data)
        }).catch((error) => {
            console.log(error)
        });
    }, [index, navigate])

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then((res) => {
          console.log(res.data)
          navigate("/logs")
        }).catch((error) => console.log( error) );
        };

    return (
        <article>
            <h3>
               <span>{log.title}</span> - By {log.captainName}
                 
            </h3>
            <h5>
                Mistakes were made: <span>{log.mistakesWereMadeToday ? <span>🫠</span> : null}</span>
            </h5>
            
            <h5> Days Since Last Crisis <span>{log.daysSinceLastCrisis}</span></h5>
            <p> Post: <span>{log.post}</span> </p>
            <div className="showNavigation">
      <div>
        {" "}
        <a href={`/logs`} onClick={() => navigate(-1)}>
          Back
        </a>
      </div>
      <div>
        {" "}
        <a href={`/logs/${index}/edit`}>
          Edit
        </a>
      </div>
      <div>
        {" "}
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
        </article>
    )
};

export default LogDetails