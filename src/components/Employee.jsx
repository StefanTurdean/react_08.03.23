import React from "react";
import { Fragment } from "react";

export const Employee = (props) => {
  const { firstName, age, lastName  } = props;
  return (
    <Fragment>
      <h6>
        Employee name {firstName} {lastName} who is {age} years old
      </h6>
    </Fragment>
  );
};
