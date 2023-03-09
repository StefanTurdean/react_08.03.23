import React from "react";
import { useState } from "react";
import { Employee } from "./Employee";

export const Header = (props) => {
  const { employeeInfo } = props;
  console.log(employeeInfo);

  const [loggedIn, setloggedIn] = useState(false);

  return (
    <header className="App-header">
      <h1>Welcome To My App</h1>

      {!loggedIn && <h2>Please Log In</h2>}

      <button onClick={() => setloggedIn(!loggedIn)}>
        {loggedIn ? "Log out" : "Login"}
      </button>

      {loggedIn ? (
        <div>
          <h4>Employee List:</h4>

          {employeeInfo.map((spreadEmployeeInfo) => {
            return (
              <Employee
                key={spreadEmployeeInfo.employeeId}
                {...spreadEmployeeInfo}
              />
            );
          })}
        </div>
      ) : (
        <></>
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
  );
};
