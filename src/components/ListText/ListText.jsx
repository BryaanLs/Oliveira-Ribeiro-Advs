/* eslint-disable react/prop-types */
import React from "react";
import "./ListText.css";

const ListText = ({ listLeft, listRight }) => {
  return (
    <>
      <div className="listText">
        <ul className="listLeft">
          {listLeft.map((li, index) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
        <ul className="listRight">
          {listRight.map((li, index) => (
            <li key={li}>{li}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListText;
