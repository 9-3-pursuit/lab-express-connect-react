import { FcCheckmark } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Log({ log, index }) {
  return (
    <div className="Log grid grid-cols-3 gap-x-1 odd:bg-[#FBF4EF]">
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        {log.mistakesWereMadeToday && <FcCheckmark />}
      </div>
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        <li className="list-none font-medium">{log.captainName}</li>
      </div>
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        <Link
          to={`/logs/${index}`}
          className="list-none font-medium hover:underline underline-offset-4"
        >
          {log.title}
        </Link>
      </div>
    </div>
  );
}
