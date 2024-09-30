import React, {useState} from  "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");
  const [submittedData, setSubmittedData] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedSubjects = Object.keys(subjects).filter((sub) => subjects[sub])
    const data ={
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      selectedSubjects,
      subjects,
      resume,
      url,
      about
    };

    setSubmittedData(data)
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => (
      {
        ...prev,
        [sub]: !prev[sub]
      }
    ));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
    setSubmittedData(null)
  }

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">
          <label htmlFor="firstname">
            FirstName<span className="important">*</span>
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastname">
            Last Name<span className="important">*</span>
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="email">
            Enter Email<span className="important">*</span>
          </label>
          <input 
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="tel">
            Contact<span className="important">*</span>
          </label>
          <input 
            type="tel"
            name="tel"
            id="tel"
            value={contact}
            onChange={e => setContact(e.target.value)}
          />
          <label htmlFor="gender">
            Gender<span className="important">*</span>
          </label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input 
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label htmlFor="lang">
            Your best subject
          </label>
          <input 
            type="checkbox"
            name="lang"
            id="english"
            checked={subjects.english === true}
            onChange={(e) => handleSubjectChange("english")}
          />
          English
          <input 
            type="checkbox"
            name="lang"
            id="maths"
            checked={subjects.maths === true}
            onChange={(e) => handleSubjectChange("maths")}
          />
          Maths
          <input 
            type="checkbox"
            name="lang"
            id="physics"
            checked={subjects.physics === true}
            onChange={(e) => handleSubjectChange("physics")}
          />
          Physics
          <label>Upload Resume<span className="important">*</span></label>
          <input 
            type="file"
            name="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            placeholder="Enter Upload File"
            required
          />
          <label htmlFor="url">Enter URL<span className="important">*</span></label>
          <input 
            type="url"
            name="url"
            id="url"
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter url"
            required
          />
          <label htmlFor="select">Select your choice</label>
          <select
            name="select"
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option
              value=""
              disabled
              selected={selectedOption === ""}
            >
              Select your answer
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="t">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="10"
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About your self"
            required
          ></textarea>
          <button
            type="reset"
            value="Reset"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <button
            type="submit"
            value="Submit"
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
      </fieldset>

      {submittedData && (
        <div className="welcome-message">
          <h2>Welcome {submittedData.firstName} {submittedData.lastName}!</h2>
          <p>Email: {submittedData.email}</p>
          <p>Contact: {submittedData.contact}</p>
          <p>Gender: {submittedData.gender}</p>
          <p>Your selected subjects:</p>
          <ul>
            {submittedData.selectedSubjects.map((subject) => (
              <li key={subject}>{subject}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )


}
export default App;