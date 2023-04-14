import React, { useState } from "react";
import "../screen/form.css";

function Form() {
  return (
    <div>
      <div className="formpage">
        <h3>Book Saudi Arabia Packages Today!</h3>
        <form className="detailsform" action="">
          <div className="forminput">
            <label htmlFor="">Name</label>
            <input className="placespace" type="text" placeholder="Full Name" />
            <div class="sprite-image user"></div>
          </div>

          <div className="forminput">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="Email" />
            <div class="sprite-image email"></div>
          </div>

          <div className="forminput">
            <label htmlFor="">Country Code</label>
            <select name="" id="">
              <option value="">Select Country Code</option>
              <option value="">+91</option>
              <option value="">+92</option>
            </select>
            <div class="sprite-image country"></div>
          </div>

          <div className="forminput">
            <label htmlFor="">Mobile Number</label>
            <input type="tel" name="" id="" placeholder="Your Mobile No" />
            <div class="sprite-image phone"></div>
          </div>

          <div className="forminput">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
