import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {Log.isFavorite ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <a href={Log.url} target="_blank" rel="noreferrer">
          {Log.name}
        </a>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default Log;
