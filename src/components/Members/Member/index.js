import React from "react"
import Description from "../../Description"

const getIcon = url => {
  switch (true) {
    case url.includes("facebook"):
      return "fa fa-facebook"
    case url.includes("instagram"):
      return "fa fa-instagram"
    case url.includes("twitter"):
      return "fa fa-twitter"
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
                    <i className={getIcon(social)}></i>
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
