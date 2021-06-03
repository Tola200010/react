import React from "react";
import "./card-list-style.css";

export const CardList = ({ monsters }) => {
  console.log(monsters);
  return (
    <div>{monsters && monsters.map((mn) => <h1>Name : {mn.name}</h1>)}</div>
  );
};
