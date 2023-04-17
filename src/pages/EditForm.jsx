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

    const handleTextChange = (event) => {
        const { name, value, type, checked } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .put(`${process.env.REACT_APP_API}/logs/${index}`, form)
            .catch((error) => {
                console.log(error)
            })
            navigate(`/logs/${index}`)
    }

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/logs/${index}`)
            .then((response) => {
                setForm(response.data)
            })
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <br/> <br/>
                <label>
                    Captain's Name:
                    <br/> <br/>
                    <input
                        id="captainName"
                        name="captainName"
                        type="text"
                        value={form.captainName}
                        onChange={handleTextChange}
                    />
                </label>

                <label>
                    <br/> <br/>
                    Title:
                    <br/> <br/>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={form.title}
                        onChange={handleTextChange}
                    />
                </label>
                <br/> <br/>
                <label>Post:</label>
                <br/> <br/>
                <textarea
                    id="post"
                    name="post"
                    value={form.post}
                    onChange={handleTextChange}
                />
                <br/> <br/>
                <label>Days Since Last Crisis:</label>
                <br/> <br/>
                <input
                    id="daysSinceLastCrisis"
                    name="daysSinceLastCrisis"
                    type="number"
                    value={form.daysSinceLastCrisis}
                    onChange={handleTextChange}
                />

                <label>
                    <br/> <br/>
                    Mistakes were made today:
                    <br/> <br/>
                    <input
                        id="mistakesWereMadeToday"
                        name="mistakesWereMadeToday"
                        type="checkbox"
                        checked={form.mistakesWereMadeToday}
                        onChange={handleTextChange}
                    />
                </label>
                <br/><br/>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default EditForm
