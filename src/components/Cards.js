import React from "react";
import "./styles.css";
import icon1 from "../assets/icon1.png";

const Cards = ({ text1, text2, imgsrc }) => {
  return (
    <div className="col-sm-10 cards">
      <img src={imgsrc} alt="card" />
      <p>
        {text1} <span>{text2}</span>
      </p>
    </div>
  );
};

export default Cards;
