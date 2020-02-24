import React from "react"

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
    <div style={{ minWidth: "33%", width: "33%" }}>
      <div className={""}>
        <div className={"member-avatar"}>
          <img
            className={"avatar"}
            style={{ maxHeight: "422px" }}
            alt=""
            src={props.avatar}
          />
        </div>
      </div>
      <div className={""}>
        <div className={"member-dec"}>
          <div className={"intro"}>
            <h3>{props.name}</h3>
            <h4>{props.position}</h4>
            <p>{props.desc}</p>
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
