import React from "react";
import logo from "../assets/logo.png";
import "./styles.css";
import Cards from "./Cards";
import cardsapi from "../api/cardsapi";
import Button from 'react-bootstrap/Button';

const HeroSection = () => {
  return (
    <div className="row hero-section">
      <div className="container">
        <div className="col-8" style={{ textAlign: "center" }}>
          <img style={{ marginBottom: "20px" }} src={logo} alt="logo" />
          <h3 className="title">
            learn to build & scale your ecommerce business
          </h3>
          <h1 className="diploma">
            Diploma Track <span>2022</span>{" "}
          </h1>
        </div>
        <div className="col-8">
          <div className="row cardsrow">
            {cardsapi.map((val) => {
              return (
                <Cards
                  key={val.id}
                  text1={val.text1}
                  text2={val.text2}
                  imgsrc={val.imgsrc}
                />
              );
            })}
          </div>
        </div>
        <div className="col-8" style={{textAlign: "center", margin: "60px 0 20px 0"}}>
          <Button className="btn" >Enroll Now</Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
