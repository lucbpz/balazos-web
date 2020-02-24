import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons"
import StyledBackgroundSection from "../BackgroundSection"

import "./styles.css"

const Social = props => {
  return (
    <StyledBackgroundSection
      className={"full parallax social-networks"}
      src={"balazos-fabrica-2.jpg"}
    >
      <div className={"two spacing"}></div>
      <div className={"row"}>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://facebook.com/balazosdirecto">
              <FontAwesomeIcon className="social-icon" icon={faFacebook} />
            </a>
            <h4>Facebook</h4>
            <p>Síguenos en facebook</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://instagram.com/balazosdirecto">
              <FontAwesomeIcon className="social-icon" icon={faInstagram} />
            </a>
            <h4>Instagram</h4>
            <p>Síguenos en instagram</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://twitter.com/balazosdirecto">
              <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            </a>
            <h4>Twitter</h4>
            <p>Síguenos en twitter</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="https://www.youtube.com/channel/UC3_CxMsHZCWuVUnIEixaIhg">
              <FontAwesomeIcon className="social-icon" icon={faYoutube} />
            </a>
            <h4>YouTube</h4>
            <p>Mira nuestro canal de youtube</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
      </div>
      <div className={"two spacing"}></div>
    </StyledBackgroundSection>
  )
}

export default Social
