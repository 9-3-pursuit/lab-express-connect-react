import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLog, deleteLog } from "../../utils/api";

const ShowLog = () => {
  const [log, setLog] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/logs");
  };

  const handleEdit = () => {
    navigate(`/logs/${index}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteLog(index);
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchLog = async () => {
      try {
        const response = await getLog(index);
        setLog(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLog();
  }, [index]);

  return (
    <>
      <div>Show</div>
      <div className="show">
        <h1>
          {log.title} - By {log.captainName}
        </h1>
        <p id="post">{log.post}</p>
        <p>
          <span>Mistakes today:</span> {log.mistakesWereMadeToday ? "Yes" : "No"}
        </p>
        <p>
          <span>Days since last crisis:</span> {log.daysSinceLastCrisis}
        </p>
      </div>
      <div className="buttons">
        <button className="back" onClick={handleGoBack}>
          Back
        </button>
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </>
  );
};

export default ShowLog;
