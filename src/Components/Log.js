import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Log({ log, index }) {
    const navigate = useNavigate();

    const handleDelete = () => {
        axios
            .delete(`${process.env.REACT_APP_URL}/logs/${index}`)
            .then(() => {
                navigate("/logs");
            })
    };

    return (
        <tr className="Log">
            <td>
                {log.mistakesWereMadeToday ? (
                    <span>💥</span>
                ) : (
                    <span>&nbsp; &nbsp; &nbsp;</span>
                )}
            </td>
            <td>
                <p>{log.captainName}</p>
            </td>
            <td>
                <a href={`/logs/${index}`} target="_blank" rel="noreferrer">
                    {log.title}
                </a>
            </td>
            <button onClick={handleDelete}>Delete</button>
        </tr>
    );
}

export default Log;