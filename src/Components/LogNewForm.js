import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LogNewForm() {
    const [log, setLog] = useState({
      captainName: "",
      title: "",
      post: "",
      mistakesWereMadeToday: false,
      daysSinceLastCrisis: ""
    });

    const navigate = useNavigate();

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id]: event.target.value});
    }

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post(`${process.env.REACT_APP_API_URL}/logs`, log)
          .then(() => {
            navigate("/logs");
          })
          .catch((e) => {
            console.log(e);
          });
    }

    return (
        <div>
            <form className="flex flex-col mx-16 mt-8" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="captainName">Captain's Name:</label>
                    <input className="border border-gray-400 w-11/12 h-10 mx-16 rounded pl-4" id="captainName" value={log.captainName} onChange={handleTextChange} type="text" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="title">Title:</label>
                    <input className="border border-gray-400 w-11/12 h-10 mx-16 rounded pl-4" id="title" value={log.title} onChange={handleTextChange} type="text" required />
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="post">Post:</label>
                    <textarea className="border border-gray-400 w-11/12 h-20 mx-16 rounded pl-4" id="post" value={log.post} onChange={handleTextChange} type="text" placeholder="What happened today?" required/>
                </div>
                <div className="flex flex-col">
                    <label className="font-bold text-lg" htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                    <input className="border border-gray-400 w-11/12 h-10 mx-16 rounded pl-4" id="daysSinceLastCrisis" value={log.daysSinceLastCrisis} onChange={handleTextChange} type="number" />
                </div>
                <div className="flex flex-col items-start">
                    <label className="font-bold text-lg" htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                    <input className="relative left-20 cursor-pointer" id="mistakesWereMadeToday" onChange={handleCheckboxChange} checked={log.mistakesWereMadeToday} type="checkbox" />
                </div>
                <div className="flex justify-center">
                    <input className="font-bold border border-gray-400 h-12 w-96 rounded mt-8 cursor-pointer" type="submit" />
                </div>
            </form>
        </div>
    )
}
