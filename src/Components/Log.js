function Log({ log, index }) {
    return (
  
      <tr className="Log">
        <td>
          {log.mistakesWereMadeToday ? (
            <span>&#x1F4A5;</span>
          ) : (
            <span>&nbsp; &nbsp; &nbsp;</span>
          )}
        </td>
        <td>
          {log.captainName}
          </td>
        <td>
          <a href={`/logs/${index}`}>{log.title}</a>
        </td>
      </tr>
    );
  }
  
  export default Log;