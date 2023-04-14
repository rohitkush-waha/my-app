import React from "react";
import "../screen/footer.css";

function Footer() {
  return (
    <>
    <div className="bgcolor">
      <div className="container">
        <div className="footerlogo">
          <div>
            <h1>Connect With Us</h1>
          </div>
          <div className="logo">
            <img
              src="https://c.myholidays.com/cms/images/theme/myholiday_logo.svg"
              alt=""
            />
          </div>
        </div>
        <div className="link-quotes">
          <div className="link">
            <div>
              <h3>Email Us</h3>
              <a href="mailto:">callcenter@regencyholidays.com</a>
            </div>
            <div>
              <h3>Call Us</h3>
              <a href="tel:+">+974 4434 4444</a>
            </div>
          </div>
          <div className="quotes">
            <p>
              "Relax, Re-energize yourself and explore as many places as
              possible, through RegencyHolidays.com"
            </p>
          </div>
        </div>
        <hr />
        <div>
          <address>
            Regency Travel & Tours W.L.L, Ground Floor, Regency Group Holding,
            Suhaim Bin Hamad Street, P.O. Box 9012, Doha, Qatar C.R. Number
            16099
          </address>
        </div>
        </div>
        </div>
        <div className="container">

        
        <div className="belowfooter">
          <div className="cert">
            <div class="sprite1-image cert1"></div>
            <div class="sprite1-image cert2"></div>
          </div>
          <div className="card">
            <div class="sprite2-image card1"></div>
            <div class="sprite2-image card1"></div>
            <div class="sprite2-image card1"></div>
            <div class="sprite2-image card1"></div>
          </div>
        </div>
        <div className="terms">
            <div><p>© 2022 regencyholidays.com. All rights reserved. | Terms Of Use | Privacy Policy</p></div>
            <div><p>Powered by Affixious</p></div>
        </div>
        </div>
      
    </>
  );
}

export default Footer;
