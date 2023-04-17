import {Link} from 'react-router-dom'
//import "./ShowLogs.css";

export default function ShowLogs({ log,index }) {
  return (
    <article className="log">
      <h3 className="CaptainName">
        <Link to={`/logs/${index}`}>{log.captainName}</Link>
      </h3>
      
    </article>
  );
}
