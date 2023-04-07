import { useState } from "react"
import quesContext from "./noteContext"

function QuesState(props) {

  const host = "http://localhost:5000"
  const quesinitial = []

  const [question, setQues] = useState(quesinitial)

  //* Function: - Get all questions asked by the particular user 
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        'Content-Type': 'applicaton/json',
        'auth-token': localStorage.getItem('token'),
      },
    });
    const json = await response.json();
    setQues(json);
  }

  //* Function: - For adding Question asked by the user
  const addNote = async (ques) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token'),
      },
      body: JSON.stringify({ ques })
    });

    // Updating note in frontend        
    const json2 = await response.json();
    setQues(question.concat(json2))
  }


  return (
    <div>
      <quesContext.Provider value={{ question, getNotes, addNote }}>
        {props.children}
      </quesContext.Provider>
    </div>
  )
}

export default QuesState
