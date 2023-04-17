import React from "react";
import "../screen/header.css";
import "font-awesome/css/font-awesome.min.css";

function Header() {
  return (
    <div>
      

      <div className="bannerform">

      
      <div className="banner">
        <img
          className="bannerimg"
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/fifa-landing-page-banner.webp"
          alt="bannerimg"
        />

        <div className="textlogo">
          <img src="https://c.myholidays.com/images/Logo.png" alt="" />
        </div>
      </div>

      <div className="formpage">
        <h1>Book Saudi Arabia Packages Today!</h1>
        <form action="">
          <label className="inputblock" htmlFor="">
            Name
          </label>
          <input
            className="inputblock"
            type="text"
            placeholder="Enter your name"
          />
          <label className="inputblock" htmlFor="">
            Email
          </label>
          <input
            className="inputblock"
            type="email"
            name=""
            id=""
            placeholder="Enter your email"
          />
          <label className="inputblock" htmlFor="">
            Country Code
          </label>
          <select className="inputblock" name="" id="">
            <option value="">Select Country Code</option>
            <option value="">+91</option>
            <option value="">+91</option>
            <option value="">+91</option>
          </select>
          <label className="inputblock" htmlFor="">
            Mobile No
          </label>
          <input
            className="inputblock"
            type="tel"
            name=""
            id=""
            placeholder="Enter your Phone no."
          />
          <button className="inputblock" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Header;
