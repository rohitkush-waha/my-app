import React from 'react'
import '../screen/saudiarabia.css'
import Form from './Form'


function Saudiarabia() {
  return (
    <>
        <div className="banner">
        <img
          className="bannerimg"
          src="https://c.myholidays.com/tourismbord/saudiarabia/fifa/fifa-landing-page-banner.webp"
          alt=""
        />

        <div className="textlogo">
          <img src="https://c.myholidays.com/images/Logo.png" alt="" />
        </div>
        <div className='detailsubmit'>
            <Form/>
        </div>
      </div>
    </>
  )
}

export default Saudiarabia