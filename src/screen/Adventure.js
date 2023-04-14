import React from "react";
import '../screen/adventure.css'

function Adventure() {
  return (
    <div className="container both">
      <div className="left">
        <img
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/football-net-saudi-arabia.jpg"
          alt=""
        />
      </div>
      <div className="right">
        <h1>Saudi adventures you do not want to miss!</h1>
        <p>
          Discover the essence of Saudi, where you’ll find a mixture of global
          diversity that has emerged from this cradle of many human
          civilizations. Explore the rock inscriptions and archaeological cities
          dating back to more than 10,000 years. Witness the most mesmerizing
          iconic architectural masterpieces and discover the enchanting world of
          oriental scents.
        </p>
        <img
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/football-player.png "
          alt=""
        />
      </div>
    </div>
  );
}

export default Adventure;
