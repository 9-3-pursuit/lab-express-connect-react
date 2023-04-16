import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <p>Captain's Log</p>
            <button><Link to="/logs">Back</Link></button>
            <button>
                <Link to='/logs'>
                Show
                </Link>
            </button>
            <button><Link to='/logs'>Delete</Link></button>
            <button><Link to="/logs/0/edit">Edit</Link></button>
        </div>
    );
}

export default NavBar;
