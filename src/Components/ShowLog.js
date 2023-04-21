import {Link} from 'react-router-dom'
//import "./ShowLogs.css";

export default function ShowLogs({ log,index }) {
  return (
    <tr>
      <td>
        {log.title ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      {/* <br></br> */}
      <td>
        
      </td>
      <td>
    <h3 className="CaptainName">
         <Link to={`/logs/${index}`}>{log.captainName}</Link>
       </h3>
       </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
      </tr>
  
  );
}