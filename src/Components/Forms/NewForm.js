import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewForm() {
  const initialState = {
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  };
  const [form, setForm] = useState({ ...initialState });
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "mistakesWereMadeToday") {
      setForm({ ...form, [e.target.id]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3005/logs/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 201) {
          setForm({ ...initialState });
          navigate("/logs");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="min-h-screen pt-20 flex flex-col items-center min-w-full">
        <h1 className="text-2xl pb-4">New Form</h1>
        <div className="w-1/2 h-1/2 border mx-auto">
          <div className="mx-auto w-max-fit">
            <form className="flex flex-col pt-4" onSubmit={handleSubmit}>
              <label htmlFor="captainName">Captain's Name:</label>
              <input
                type="text"
                id="captainName"
                onChange={handleChange}
                placeholder="Name"
              ></input>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                placeholder="Your Title"
                onChange={handleChange}
              ></input>
              <label htmlFor="post">Post:</label>
              <textarea
                id="post"
                placeholder="Your Post"
                row="30"
                onChange={handleChange}
              ></textarea>
              <label htmlFor="mistakesWereMadeToday">
                Mistakes were made today:
                <input
                  type="checkbox"
                  id="mistakesWereMadeToday"
                  onChange={handleChange}
                ></input>
              </label>
              <label htmlFor="daysSinceLastCrisis">
                Days Since Last Crisis:
              </label>
              <input
                type="number"
                id="daysSinceLastCrisis"
                onChange={handleChange}
                placeholder="0"
                min="0"
              ></input>
              <input
                type="submit"
                value="Submit"
                className="border p-2 w-fit rounded-md"
              ></input>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
