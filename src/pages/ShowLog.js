import LogDetails from "../components/LogDetails";

const ShowLog = () => {
    return (
        <div className="Show">
            <h2>Show Log</h2>
            <LogDetails/>
            <a href={`/logs`}>Back</a>
        </div>
    )
};

export default ShowLog;