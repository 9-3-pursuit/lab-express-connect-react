import { Link } from "react-router-dom";

export default function Log({log, index}) {
    return (
        <tr className="Log">
          <td>
            {log.mistakesWereMadeToday ? (
              <span>🤯</span>
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
          </td>
          <td>
            <a href={log.url} target="_blank" rel="noreferrer">
              {log.name}
            </a>
          </td>
          <td>
            <Link to={`/logs/${index}`}>{log.title}</Link>
          </td>
        </tr>
      );;
}