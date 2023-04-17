import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams} from "react-router-dom";

const CreateNewLog = () => {
  const [newLog, setNewLog] = useState({
    captainName: '',
    title: '',
    post: '',
    daysSinceLastCrisis: '',
    mistakesWereMadeToday: ''
  });

  const navigate = useNavigate();
  const { index } = useParams();

  const handleTextChange = (e) => {
    const { id, value } = e.target;
    setNewLog(prevState => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API}/logs`, newLog)
        .then(() => {
            console.log('this works')
            navigate('/logs')
        })
        .catch((error) => {
            console.log('this does not work stupid',error)
      });
  };

  const handleDelete = () => {
    axios.delete(`${process.env.REACT_APP_API}/logs/${index}`)
      .then(() => {
        navigate('/logs');
      })
      .catch(() => {
        navigate('/logs');
      });
  };

  return (
      <div>
          
          <h1>Create New Log</h1>
          <br/><br/>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Captain's Name:</label>
          <br/>
          <input type="text" name="captainName" id="captainName"
            value={newLog.captainName} onChange={handleTextChange} />
        </div>
         <div>
              <br/><br/>
          <label>Title:</label>
             <br/>
          <input type="text" name="title" id="title"
            value={newLog.title} onChange={handleTextChange} />
        </div>
         
              <br/><br/>
          <label>Post:</label>
             <br/>
          <textarea name="post" id="post"
            value={newLog.post} onChange={handleTextChange} />
        
        <div>
             <br/><br/>
         <label>Days Since Last Crisis:</label>
             <br/>
          <input type="number" name="daysSinceLastCrisis" id="daysSinceLastCrisis"
            value={newLog.daysSinceLastCrisis} onChange={handleTextChange} />
        </div>
        <div>
              <br/><br/>
                  <label>Mistakes were made today:</label>
          <input type="checkbox" name="mistakesWereMadeToday" id="mistakesWereMadeToday"
            checked={newLog.mistakesWereMadeToday} onChange={handleTextChange} />
        </div>
              <br/><br/>
        <button type="submit">Create Log</button>
        <button type="button" onClick={handleDelete}>Delete Log</button>
      </form>
    </div>
  );
};

export default CreateNewLog;
