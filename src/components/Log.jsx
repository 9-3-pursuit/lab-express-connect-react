import { useParams, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


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
  }, [index]);

  const navigate = useNavigate();
    console.log('index', index)

    const handleDelete = () => {
        if (index !== null) {
            console.log(`This ${index} was deleted`)
            axios.delete(`${process.env.REACT_APP_API}/logs/${index}`)
                .then(() => {
                    console.log(`Log ${index} successfully deleted`);
                    
                })
                .catch((error) => {
                    console.log(error);
                });
                navigate('/logs')
        }
    };

  return (
    <div>
      <h1>{logData.title} - By {logData.captainName}</h1>
      <p>Captain Name: {logData.captainName}</p>
      <p>Days since last crisis: {logData.daysSinceLastCrisis}</p>
      <p>Mistakes Were Made Today: {logData.mistakesWereMadeToday}</p>
      <p>Post: {logData.post}</p>
      <button onClick={() => { handleDelete(); }}>Delete</button>
      <button><Link to="/logs/0/edit">Edit</Link></button>
    </div>
  );
};

export default Log;
