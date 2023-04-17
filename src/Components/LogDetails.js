import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";



export default function LogDetails() {
    const [log, setLog] = useState({});
    const navigate = useNavigate();
    let { index } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
            .then((res) => {
                setLog(res.data)
            }).catch(() => {
                navigate("/not-found");
            })
    }, [index, navigate]);

    const handleDelete = () => {
      axios
        .delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
        .then(() => {
          navigate("/logs");
        });
    };
    return (
      <div>
        <div className="bg-[#EDFAFC] h-48 w-auto flex flex-col justify-evenly mx-40 my-10 pl-8 rounded-xl shadow-[3px_3px_5px_]">
          <h2 className="text-4xl">{`${log.title} - By ${log.captainName}`}</h2>
          <p className="text-2xl">{log.post}</p>
          <p className="text-md font-medium">
            <span className="font-bold">Days since last crisis: </span>
            {log.daysSinceLastCrisis}
          </p>
        </div>
        <div className="flex justify-center gap-20">
          <Link
            to={"/logs"}
            className="border border-black font-bold w-28 h-10 flex justify-center items-center rounded"
          >
            BACK
          </Link>
          <Link
            to={`/logs/${index}/edit`}
            className="border border-black font-bold w-28 h-10 flex justify-center items-center rounded"
          >
            EDIT
          </Link>
          <button
            onClick={handleDelete}
            className="border border-black font-bold w-28 h-10 flex justify-center items-center rounded"
          >
            DELETE
          </button>
        </div>
      </div>
    );
}
