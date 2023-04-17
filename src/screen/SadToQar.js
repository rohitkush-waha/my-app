import React from "react";
import "../screen/sadtoqar.css";

function SadToQar() {
  return (
    <div className="container">
        <h1 className="head">Travelling Saudi Arabia From Qatar</h1>
    <div className="main">
      <div className="main-left">
        <div>
          
          <div className="flight-car">
            <img
              src="https://www.myholidays.com/images/flight-icon-disabled.png"
              alt=""
            />
            <img
              src="https://www.myholidays.com/images/car-icon-disabled.png"
              alt=""
            />
          </div>
        </div>
        <div className="both">
          <div className="left-opt">
            <label htmlFor="">
              <input type="radio" name="" id="" checked={true} />
              Jeddah
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Makkah
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Medina
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Riyadh
            </label>
          </div>
          <div className="right-opt">
            <label htmlFor="">
              <input type="radio" name="" id="" checked={true} />
              Taif
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Al Ahsa
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Al Ula
            </label>
            <label htmlFor="">
              <input type="radio" name="" id="" />
              Dammam
            </label>
          </div>
        </div>
      </div>
      <div className="main-right">
        <div>
            <img src="https://c.myholidays.com/tourismbord/saudiarabia/doha-to-jeddah-by-flight.png" alt="" />
        </div>

      </div>
    </div>
    </div>
  );
}

export default SadToQar;
