import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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


    return (
        <article>
            <h3>
               <span>{log.title}</span>
                 
            </h3>
            <h5>
                Mistakes were made: <span>{log.mistakesWereMadeToday ? <span>🫠</span> : null}</span>
            </h5>
            <h5>
            Captain's Name:
                <span>
                &nbsp;{log.captainName}
                </span>
            </h5>
            <h5> Days since last crisis: <span>{log.daysSinceLastCrisis}</span></h5>
            <p> Post: <span>{log.post}</span> </p>
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
                    <button onClick={null}>Delete</button>
                </div>
            </div>
        </article>
    )
};

export default LogDetails