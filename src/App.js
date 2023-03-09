import { useState } from "react";
import "./App.css";
import { Employee } from "./components/Employee";

const employeeInfo = [
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
  const [loggedIn, setloggedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome To My App</h1>

        {!loggedIn && <h2>Please Log In</h2>}

        <button onClick={() => setloggedIn(!loggedIn)}>
          {loggedIn ? "Log out" : "Login"}
        </button>

        {loggedIn ? (
          employeeInfo.map((spreadEmployeeInfo) => {
            console.log(spreadEmployeeInfo);
            return (
              <Employee
                key={spreadEmployeeInfo.employeeId}
                {...spreadEmployeeInfo}
              />
            );
          })
        ) : (
          <div>Plese login</div>
        )}

        {/* rendering the employee list with map using the spread operator */}

        {/* {employeeInfo.map((spreadEmployeeInfo) => {
          console.log(spreadEmployeeInfo);
          return (
            <Employee
              key={spreadEmployeeInfo.employeeId}
              {...spreadEmployeeInfo}
            />
          );
        })} */}

        {/* rendering the employee list with map */}

        {/* {employeeInfo.map(mapEmployee => {
          const {firstName, lastName, age} = mapEmployee
          return <Employee firstName = {firstName} lastName = {lastName} age = {age} />
        })} */}

        {/* <Employee firstName="Jack" lastName="Smith" age="22" />
        <Employee firstName="Stephanie" lastName="A" age="22" />
        <Employee firstName="George" lastName="B" age="22" />
        <Employee firstName="Anthony" lastName="C" age="22" /> */}
      </header>
    </div>
  );
}

export default App;
