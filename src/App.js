import "./App.css";
import { Header } from "./components/Header";

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
  return (
    <div className="App">
      <Header employeeInfo = {employeeInfo}/>
    </div>
  );
}

export default App;
