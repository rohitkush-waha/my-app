import React from "react";
import "../screen/saudiarabia.css";
import Form from "./Form";
import SadToQar from "./SadToQar";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

function Saudiarabia() {
  return (
    <>
      <MainHeader />
      <div className="banner">
        <img
          className="bannerimg"
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/fifa-landing-page-banner.webp"
          alt=""
        />

        <div className="textlogo">
          <img src="https://c.myholidays.com/images/Logo.png" alt="" />
        </div>
        <div className="detailsubmit">
          <Form />
        </div>
      </div>

      <SadToQar />

      <div className="container">
        <div className="head-adv"> <h1>Unmatched Experience Of Saudi Arabia</h1></div>
        <div class="adv">
          <div>
            <img
              src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/football-ground-image.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>The Birthplace Of Saudi Dynasty</h1>
            <p>
              Immerse yourself in the heritage of Al Turaif, the home of the
              First State of Saudi and be mesmerized by the contrast to
              present-day Riyadh. Witness the mystifying changes happening in
              the country.
            </p>
          </div>
        </div>
        <div class="adv">
          
          <div>
            <img
              src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/umrah-express-from-doha.webp"
              alt=""
            />
          </div>
          <div>
            <h1>Umrah Express From Doha</h1>
            <p>
              Recharge your soul during the spiritual journey to the Holy Mosque
              of Mecca for Umrah and enjoy the beautiful mix of humans from
              around the world.
            </p>
          </div>
        </div>
        <div class="adv">
          <di>
            <img
              src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/al-ula-open-museum-discovery.webp"
              alt=""
            />
          </di>
          <div >
            <h1>Al Ula Open Museum Discovery</h1>
            <p>
              Explore the majestic sites in AlUla and uncover the treasures of
              ancient civilizations among the rocks and cliffs. Visit the many
              sites and experience the culture of the people living among these
              wonders.
            </p>
          </div>
        </div>
        <div class="adv">
          
          <div >
            <img
              src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/getaway-to-the-red-sea-jeddah-tour.webp"
              alt=""
            />
          </div>
          <div class="adv-heading">
            <h1>Getaway To The Red Sea Jeddah Tour</h1>
            <p>
              A package of fun and sun! Enjoy the clear waters of the Red Sea
              and its unique marine life. Then head to the historical Al balad
              district in Jeddah and savor all of its unique flavors.
            </p>
          </div>
        </div>
        <div class="adv">
          <div >
            <img
              src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/football-&-the-oasis.webp"
              alt=""
            />
          </div>
          <div >
            <h1>Football & The Oasis</h1>
            <p>
              With a 4 night hotel stay, flights and transportation taken care
              of you can enjoy the adventurous desert safaris, surprising city
              tours in Hofuf, the relaxing beaches in Al Uqair and a trip into
              the world’s largest oasis of Al Ahsa.
            </p>
          </div>
        </div>
      </div>
      

      <div className="footbal">
        <img
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/football-footer.png"
          alt=""
        />
      </div>
      <Footer />
    </>
  );
}

export default Saudiarabia;
