import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function LogEditForm() {
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/logs/${index}`)
            .then((response) => {
                setLog(response.data)
            })
    }, [index]);

    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: NaN,
    })

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put(`${process.env.REACT_APP_URL}/logs/${index}`, log)
            .then((response) => {
                setLog(response.data);
                navigate(`/logs/${index}`);
            })
            .catch((e) => {
                console.log(e);
            })
    };

    return (
        <div className="Edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Captain's Name:</label>
                <input
                    id="captainName"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Type Name Here"
                    required
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Post Title"
                    required
                />
                <label htmlFor="post">Post:</label>
                <textarea
                    id="post"
                    value={log.post}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Post Description"
                    required
                />
                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input
                    id="mistakesWereMadeToday"
                    type="checkbox"
                    onChange={handleCheckboxChange}

                    checked={log.mistakesWereMadeToday}
                />
                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input
                    id="daysSinceLastCrisis"
                    type="number"
                    onChange={handleTextChange}
                    placeholder="-"
                />
                <br />
                <input type="submit" />
            </form>
            <div className="showNavigation">
                <div>
                    {" "}
                    <Link to={`/logs`}>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LogEditForm;