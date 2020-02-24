import React from "react"
import Description from "../../Description"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

const getIcon = url => {
  switch (true) {
    case url.includes("facebook"):
      return faFacebook
    case url.includes("instagram"):
      return faInstagram
    case url.includes("twitter"):
      return faTwitter
    default:
      return undefined
  }
}
const Member = props => {
  return (
    <div style={{ minWidth: "380px", width: "380px" }}>
      <img style={{ maxHeight: "422px" }} alt={props.name} src={props.avatar} />
      <div className={""}>
        <div className={"member-dec"} style={{ paddingTop: "20px" }}>
          <div className={"intro"}>
            <h3>{props.name}</h3>
            <h4>{props.position}</h4>
            <Description primary text={props.desc} />
            <ul className={"socials"}>
              {(props.socials || []).map(social => (
                <li key={social}>
                  <a href={social}>
                    <FontAwesomeIcon icon={getIcon(social)} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Member
