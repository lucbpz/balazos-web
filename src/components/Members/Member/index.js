import React from "react"

const Member = props => {
  return (
    <div style={{ minWidth: "33%", width: "33%" }}>
      <div className={""}>
        <div className={"member-avatar"}>
          <img className={"avatar"} alt="" src={props.avatar} />
        </div>
      </div>
      <div className={""}>
        <div className={"member-dec"}>
          <div className={"intro"}>
            <h3>{props.name}</h3>
            <h4>{props.position}</h4>
            <p>{props.desc}</p>
            <ul className={"socials"}>
              {props.socials.map(social => (
                <li key={social.link}>
                  <a href={social.link}>
                    <i className={social.icon}></i>
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
