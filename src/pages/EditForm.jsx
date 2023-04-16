import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"



const EditForm = () => {

    let { index } = useParams();
    let navigate = useNavigate()
    const [form, setForm] = useState({
        captainName: '',
        title: '',
        post: '',
        daysSinceLastCrisis: '',
        mistakesWereMadeToday: ''

    })

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .put(`${process.env.REACT_APP_API}/logs${index}`, form)
            .then((response) => {
                setForm(response.data)
                navigate(`/logs/${index}`)
            })
            .catch((error) => {
                console.log(error)
            })
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <br/> <br/>
            <label>
                Captain's Name:
                <br/> <br/>
                    <input id="captainName" type="text" value={form.captainName}
                        onChange={(e) => setForm({ ...form, captainName: e.target.value })} />
            </label>

            <label>
            <br/> <br/>
                Title:
                <br/> <br/>
                    <input id="title" type="text" value={form.title}
                        onChange={(e) => setForm({...form, title: e.target.value})}    />
            </label>
            <br/> <br/>
            <label>Post:</label>
            
                
                <br/> <br/>
                <textarea id="post" value={form.post}
                        onChange={(e) => setForm({...form, post: e.target.value})}/>
            
               <br/> <br/>
            <label>Days Since Last Crisis:</label>
                
                <br/> <br/>
                <input id="daysSinceLastCrisis" type="number" value={form.daysSinceLastCrisis}
                        onChange={(e) => setForm({...form, daysSinceLastCrisis: e.target.value} )} />
            

            <label>
            <br/> <br/>
                Mistakes were made today:
                <br/> <br/>
                    <input id="mistakesWereMadeToday" type="checkbox" checked={form.mistakesWereMadeToday}
                        onChange={(e) => setForm({...form, mistakesWereMadeToday: e.target.checked})}    />
                </label>

                <br/><br/>
                
                <input type="Submit"/>
            </form>
        </div>
)

}

export default EditForm