
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function LogDetailsForm() {
  let { index } = useParams();
  const [formEdit, setFormEdit] = useState({
    captainName: "",
    daysSinceLastCrisis:"",
    mistakesWereMadeToday: true,
    post: "",
    title: "",
    review:""
  });

  let navigate = useNavigate();
  const handleTextChange = (event) => {
    setFormEdit({ ...formEdit, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setFormEdit({ ...formEdit, isFavorite: !formEdit.isFavorite });
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
      .then((response) => {
        setFormEdit(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${process.env.REACT_APP_API_URL}/logs/${index}`,formEdit)
      .then((response) => {
        setFormEdit(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={formEdit.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Person"
          required
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={formEdit.daysSinceLastCrisis}
          placeholder="days since last crisis"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          value={formEdit.mistakesWereMadeToday}
          placeholder="do we make mistakes"
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          onChange={handleCheckboxChange}
          value={formEdit.post}
          placeholder="posts"
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
         value={formEdit.title} 
          onChange={handleTextChange}
          placeholder="titles"
        />
        {/* <label htmlFor="description">Review:</label>
        <textarea
          id="review"
          name="description"
          value={formEdit.review}
          onChange={handleTextChange}
          placeholder="Describe why you bookmarked this site"
        /> */}

        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default LogDetailsForm