import { Link } from "react-router-dom";

const Log = ({log, index}) => {
    return (
        <tr>
            <td>
            {log.mistakesWereMadeToday ? (
                <span>🫠</span>
            ) : (
                <span>&nbsp; &nbsp; &nbsp;</span>
            )}
            </td>
            <td>
                <a href={log.title}>{log.title}</a>
            </td>
            <td>
                <Link to={`/logs/${index}`}>Edit</Link>
            </td>
        </tr>
    );
};

export default Log;