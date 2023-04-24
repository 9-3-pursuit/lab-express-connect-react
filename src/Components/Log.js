import { Link } from "react-router-dom";

function Log({ log, index }) {
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
                <a href={`http://localhost:3333/logs/${index}`} target="_blank" rel="noreferrer">
                    {log.title}
                </a>
            </td>
        </tr>
    );
}

export default Log;