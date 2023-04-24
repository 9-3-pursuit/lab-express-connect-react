import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogDetails() {
    const navigate = useNavigate();
    const [log, setLog] = useState({});
    let { index } = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/logs/${index}`)
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
            .delete(`${process.env.REACT_APP_URL}/logs/${index}`)
            .then(() => {
                navigate("/logs");
            })
    };

    return (
        <article>
            <h1>
                {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.title} - By {log.captainName}
            </h1>
            <p>{log.post}</p>
            <br />
            <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
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
    )
}

export default LogDetails;