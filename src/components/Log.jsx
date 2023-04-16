import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Log = () => {
  const { index } = useParams();
  const [logData, setLogData] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/logs/${index}`)
      .then((response) => {
        const data = response.data;
        setLogData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>{logData.title} - By {logData.captainName}</h1>
      <p>Captain Name: {logData.captainName}</p>
      <p>Days since last crisis: {logData.daysSinceLastCrisis}</p>
      <p>Mistakes Were Made Today: {logData.mistakesWereMadeToday}</p>
      <p>Post: {logData.post}</p>
    </div>
  );
};

export default Log;
