import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogNewForm() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post(`${process.env.REACT_APP_URL}/logs`, log)
            .then(() => { navigate("/logs"); })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <div className="New">
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
        </div>
    )
}

export default LogNewForm;