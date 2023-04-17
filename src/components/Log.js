import { Link } from "react-router-dom";

const Log = ({ log, index }) => {
    return (
      <tr>
        <td>{log.mistakesWereMadeToday ? "Yes" : "No"}</td>
        <td>
          <a href={`/logs/${index}`}>View</a>
        </td>
        <td>
          <a href={`/logs/${index}/edit`}>Edit</a>
        </td>
        <td>{log.captainName}</td>
        <td>Days since last crisis: {(log.daysSinceLastCrisis)}</td>
      </tr>
    );
  };
  
export default Log;