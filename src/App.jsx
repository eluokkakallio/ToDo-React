import { useState } from 'react'
import './App.css'
import ListItem from "./ListItem"

function App() {
  const [userInput, setUserInput] = useState("");
  const [items, setItems] = useState([]);

  const userInputHandler = (event) => {
    setUserInput(event.target.value);
  }

  const clickAddHandler = () => {
    if (userInput.trim() === "") {
      return;
    }

    setItems([
      ...items,
      userInput
    ])
    setUserInput("");
  }

  const clickDeleteHandler = (deleteIndex) => {
    setItems(items.filter((item, index) => index !== deleteIndex));
  }

  return (
    <div className="container">
      <div className="header-section">
        <h2>ToDo-List</h2>
        <p>Task to do!</p>
      </div>
        <div className="add-section">
        <input className="new-task" onChange={userInputHandler} type="text" value={userInput} placeholder="Enter a new task"></input>
        <button onClick={clickAddHandler} >Add a new task</button>
      </div>

      {items.length === 0 ?
        <p>No tasks added yet!</p>
        : (
          <ol>
            {/* nyt pelkkiä uniikkeja indexejä versus pelkkä index */}
            {items.map((item, index) =>
              <ListItem
                key={new Date().getTime() + index}
                text={item}
                onDelete={() => clickDeleteHandler(index)}
              />
            )}
          </ol>
        )
      }
    </div>
  )
}

export default App
