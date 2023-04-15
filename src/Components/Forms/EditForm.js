import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const initialState = {
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  };
  const [form, setForm] = useState({ ...initialState });
  const navigate = useNavigate();
  const { index } = useParams();

  useEffect(() => {
    const fetchIndexData = async () => {
      const res = await fetch(`http://localhost:3005/logs/${index}`);
      const data = await res.json();
      setForm(data);
    };

    fetchIndexData();
  }, []);

  console.log(form);

  const handleChange = (e) => {
    if (e.target.id === "mistakesWereMadeToday") {
      setForm({ ...form, [e.target.id]: e.target.checked });
    } else {
      setForm({ ...form, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3005/logs/${index}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.status === 202) {
          setForm({ ...initialState });
          navigate(`/logs/${index}`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main className="min-h-screen pt-20 flex flex-col items-center min-w-full">
        <h1 className="text-2xl pb-4">Edit Form</h1>
        <div className="w-1/2 h-1/2 border mx-auto">
          <div className="mx-auto w-max-fit">
            <form className="flex flex-col pt-4" onSubmit={handleSubmit}>
              <label htmlFor="captainName">Captain's Name:</label>
              <input
                type="text"
                id="captainName"
                onChange={handleChange}
                placeholder="Name"
                value={form.captainName}
              ></input>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                placeholder="Your Title"
                onChange={handleChange}
                value={form.title}
              ></input>
              <label htmlFor="post">Post:</label>
              <textarea
                id="post"
                placeholder="Your Post"
                row="30"
                onChange={handleChange}
                value={form.post}
              ></textarea>
              <label htmlFor="mistakesWereMadeToday">
                Mistakes were made today:
                <input
                  type="checkbox"
                  id="mistakesWereMadeToday"
                  onChange={handleChange}
                  checked={form.mistakesWereMadeToday}
                ></input>
              </label>
              <label htmlFor="daysSinceLastCrisis">
                Days Since Last Crisis:
              </label>
              <input
                type="number"
                id="daysSinceLastCrisis"
                onChange={handleChange}
                value={form.daysSinceLastCrisis}
                placeholder="0"
                min="0"
              ></input>
              <div className="flex w-full justify-around">
                <button className="p-2 border rounded-md">
                  <Link to={`/logs/${index}`}>Back</Link>
                </button>
                <input
                  type="submit"
                  value="Submit"
                  className="border p-2 w-fit rounded-md"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
