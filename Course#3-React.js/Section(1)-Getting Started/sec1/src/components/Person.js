import React from "react";
import "./Person.css";

//Function Component:
const person = (props)=> { //Arrow function
  return (
    <div className="person">
      <h3 onClick={props.click}>Hi I am {props.name} and I am {props.age} years old</h3>
      <p>{props.children}</p>
      <input type="text" onChange={props.change}/>
    </div>
  );
}
export default person;
