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
        window.location.reload();
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
                <a href={`/logs/${index}`} rel="noreferrer">
                    {log.title}
                </a>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    );
}

export default Log;