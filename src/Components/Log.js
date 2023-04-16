import { Link } from "react-router-dom"

export default function Log({ log, index }) {

        return (
            <div>
                <Link to={`/logs/${index}`}>
                    <a href="*">Log: {log.captainName}</a>
                </Link>
            </div>
        )
};