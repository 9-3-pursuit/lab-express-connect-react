import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const DeleteLog = () => {
    const [log, setLog] = useState({});
    const { index } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/logs/${index}`)
            .then((response) => {
                setLog(response.data);
            })
            .catch(() => {
                navigate('/logs');
            });
    }, [index, navigate]);

    const handleDelete = () => {
        axios.delete(`${process.env.REACT_APP_API}/logs/${index}`)
            .then(() => {
                navigate('/logs');
            });
    };

    return (
        <div>
            <h2>Delete Log</h2>
            <p>Are you sure you want to delete this log?</p>
            <p>{log.title}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default DeleteLog;
