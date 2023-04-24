import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogDetails() {
    const navigate = useNavigate();
    const [log, setLog] = useState({});
    let { index } = useParams();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_URL}/logs/${index}`)
            .then((response) => {
                console.log(response);
                setLog(response.data);
            })
            .catch(() => {
                navigate("/not-found");
            });
    }, [index, navigate]);
    const handleDelete = () => {
        axios
            .delete(`${process.env.REACT_APP_URL}/logs${index}`)
            .then(() => {
                navigate("/logs");
            })
    };

    return (
        <article>

        </article>
    )
}

export default LogDetails;