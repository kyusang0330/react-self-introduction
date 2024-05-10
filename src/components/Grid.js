import React from "react";
import "../CSS/Grid.css";

const Grid = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="first col-6">{props.grid1}</div>
        <div className="second col-6"> {props.grid2}</div>
      </div>
    </div>
  );
};

export default Grid;
