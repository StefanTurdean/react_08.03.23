import "./App.css";
import { Employee } from "./components/Employee";

const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: "21",
    employeeId: "js"

  },
  {
    firstName: "Stephanie",
    lastName: "A",
    age: "22",
    employeeId: "sa"

  },
  {
    firstName: "George",
    lastName: "B",
    age: "22",
    employeeId: "gb"

  },
  {
    firstName: "Anthony",
    lastName: "C",
    age: "22",
    employeeId: "ac"
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Company Directory</h1>


        {/* rendering the employee list with map using the spread operator */}

        {employeeInfo.map(spreadEmployeeInfo => {
          console.log(spreadEmployeeInfo);
          return <Employee key={spreadEmployeeInfo.employeeId} {...spreadEmployeeInfo} />
        })}



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
