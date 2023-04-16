import { FcCheckmark } from "react-icons/fc";


export default function Log({ log, index }) {
  return (
    <div className="grid grid-cols-3 gap-x-1 even:bg-[#FBF4EF] odd:bg-[#EDFAFC]">
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        {log.mistakesWereMadeToday && <FcCheckmark />}
      </div>
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        <li className="list-none font-medium">{log.captainName}</li>
      </div>
      <div className="border-b-2 h-16 w-full flex items-center justify-center">
        <li className="list-none font-medium">{log.title}</li>
      </div>
    </div>
  );
}
