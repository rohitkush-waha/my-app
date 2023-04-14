import React from "react";
import '../screen/MainHeader.css'

function MainHeader() {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <a href="#">
            <img
              src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
