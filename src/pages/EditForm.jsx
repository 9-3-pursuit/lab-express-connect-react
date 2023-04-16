import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"



const EditForm = () => {

    const handleSubmit = (event) => {
        event.preventDefault()
       
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br/> <br/>
            <label>
                Captain's Name:
                <br/> <br/>
                <input id="captainName" type="text" />
            </label>

            <label>
            <br/> <br/>
                Title:
                <br/> <br/>
                <input id="title" type="text" />
            </label>

            <label>Post:</label>
            
                
                <br/> <br/>
               <textarea id="post"/>
            

            <label>Days Since Last Crisis:</label>
                
                <br/> <br/>
                <input id="daysSinceLastCrisis" type="number" />
            

            <label>
            <br/> <br/>
                Mistakes were made today:
                <br/> <br/>
                <input id="mistakesWereMadeToday" type="checkbox" />
                </label>

                <br/><br/>
                
                <input type="Submit"/>
            </form>
        </div>
)

}

export default EditForm