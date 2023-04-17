import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLog, updateLog } from "../../utils/api";

const UpdateLog = () => {
  const { index } = useParams();
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateLog(index, log);
      navigate(`/logs/${index}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (event) => {
    setLog({
      ...log,
      [event.target.id]: event.target.value,
    });
  };

  const handleBoxChange = () => {
    setLog({
      ...log,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
    });
  };

  useEffect(() => {
    const fetchLog = async () => {
      setLog(await getLog(index));
    };
    fetchLog();
  }, [index]);

  return (
    <div className="new">
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input id="captainName" type="text" value={log.captainName} onChange={handleTextChange} placeholder="Name" />
        <br />
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={log.title} placeholder="Title" onChange={handleTextChange} required />
        <br />
        <label htmlFor="post">Post:</label>
        <textarea id="post" name="post" value={log.post} placeholder="Type notes here" onChange={handleTextChange} />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input id="mistakesWereMadeToday" name="mistakesWereMadeToday" type="checkbox" onChange={handleBoxChange} checked={log.mistakesWereMadeToday} />
        <br />
        <label htmlFor="daysSinceCrisis">Days Since Last Crisis</label>
        <input id="daysSinceLastCrisis" name="daysSinceLastCrisis" type="number" value={log.daysSinceLastCrisis} onChange={handleTextChange} />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateLog;
