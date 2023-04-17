import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const NavBar = () => {
    const [logId, setLogId] = useState(null);
    const navigate = useNavigate();

    const handleDelete = () => {
        if (logId !== null) {
            axios.delete(`${process.env.REACT_APP_API}/logs/${logId}`)
                .then(() => {
                    console.log(`Log ${logId} successfully deleted`);
                    navigate('/logs');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div>
            <p>Captain's Log</p>
            <button><Link to="/logs">Back</Link></button>
            <button><Link to='/logs'>Show</Link></button>
            <button onClick={() => {setLogId(0); handleDelete();}}>Delete</button>
            <button><Link to="/logs/0/edit">Edit</Link></button>
            <button><Link to="/logs/new">Create</Link></button>

        </div>
    );
}

export default NavBar;
