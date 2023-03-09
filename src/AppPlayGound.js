import { useState } from "react";
import "./App.css";
import { Employee } from "./components/Employee";

let employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: "21",
    employeeId: "js",
  },
  {
    firstName: "Stephanie",
    lastName: "A",
    age: "22",
    employeeId: "sa",
  },
  {
    firstName: "George",
    lastName: "B",
    age: "22",
    employeeId: "gb",
  },
  {
    firstName: "Anthony",
    lastName: "C",
    age: "22",
    employeeId: "ac",
  },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h1>WELCOME TO MY APP</h1>
        <button onClick = {() => setLoggedIn(!loggedIn)}>{loggedIn ? "log out" : "log In"}</button>
        {loggedIn ? (
          <h1>Hello user</h1>
        ) : (
          <div>
            <h2>Please log in</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
