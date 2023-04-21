import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function BookmarkNewForm() {
  const [formLog, SetFormLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
    description:""
  });

  const navigate = useNavigate();
  const handleTextChange = (event) => {
    SetFormLog({ ...formLog, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    SetFormLog({ ...formLog, mistakesWereMadeToday: !formLog.mistakesWereMadeToday});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${process.env.REACT_APP_API_URL}/bookmarks`, formLog) 
      .then(() => {
        navigate("/logs"); //index page
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
           id="captainName"
           value={formLog.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="captainName"
          required
        />
        
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          // name="title"
          value={formLog.title} 
          placeholder="title"
          onChange={handleTextChange}
        />

<label htmlFor="post">Post:</label>
        <textarea   
          id="post"
          type="text"
          name="post"
          value={formLog.post}
          placeholder="post"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={formLog.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          name="daysSinceLastCrisis"
          value={formLog.daysSinceLastCrisis}
          placeholder="daysSinceLastCrisis"
          onChange={handleTextChange}
        />
        {/* <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formLog.description}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        /> */}
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default BookmarkNewForm;
