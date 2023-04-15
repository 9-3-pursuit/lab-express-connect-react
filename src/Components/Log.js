import { FcCheckmark } from "react-icons/fc";


export default function Log({ log, index }) {
  return (
    <div className="grid grid-cols-3 justify-items-center">
      {log.mistakesWereMadeToday && <FcCheckmark />}
      <li>{log.captainName}</li>
      <li>{log.title}</li>
    </div>
  );
}
