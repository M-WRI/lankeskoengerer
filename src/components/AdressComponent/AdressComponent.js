import React from "react"

import "./AdressComponent.scss"

const AdressComponent = () => {
  return (
    <address id="contact" className="address-container">
      <div>
        <a href="https://www.google.com/maps/place/Stendaler+Str.+4,+10559+Berlin,+Deutschland/data=!4m2!3m1!1s0x47a85175e13c9c49:0x6fc470b07148443?sa=X&ved=2ahUKEwiNuN7DkqfvAhVGvFkKHfZDCAkQ8gEwAHoECAUQAQ">
          Stendaler Straße 4<br />
          10559 Berlin
        </a>
      </div>
      <div>
        <a href="mailto:info@lankeskoengeter.de">info@lankeskoengeter.de</a>
      </div>
      <div>
        <a href="tel:+4930123456">030 123 456</a>
      </div>
    </address>
  )
}

export default AdressComponent
