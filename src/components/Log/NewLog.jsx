import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLog } from "../../utils/api";

const NewLog = () => {
  const navigate = useNavigate();

  const [formLogData, setFormLogData] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setFormLogData({
      ...formLogData,
      [event.target.id]: event.target.value,
    });
  };

  const handleBoxChange = () => {
    setFormLogData({
      ...formLogData,
      mistakesWereMadeToday: !formLogData.mistakesWereMadeToday,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createLog(formLogData);
      navigate("/logs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input id="captainName" type="text" value={formLogData.captainName} onChange={handleTextChange} placeholder="Name" />
        <br />
        <label htmlFor="title">Title:</label>
        <input id="title" type="text" value={formLogData.title} placeholder="Title" onChange={handleTextChange} required />
        <br />
        <label htmlFor="post">Post:</label>
        <textarea id="post" name="post" value={formLogData.post} placeholder="Type notes here" onChange={handleTextChange} />
        <br />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input id="mistakesWereMadeToday" name="mistakesWereMadeToday" type="checkbox" onChange={handleBoxChange} checked={formLogData.mistakesWereMadeToday} />
        <br />
        <label htmlFor="daysSinceCrisis">Days Since Last Crisis</label>
        <input id="daysSinceLastCrisis" name="daysSinceLastCrisis" type="number" value={formLogData.daysSinceLastCrisis} onChange={handleTextChange} />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewLog;
