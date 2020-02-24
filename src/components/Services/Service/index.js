import React from "react"

const Service = props => (
  <div
    className={"mod modIconText"}
    style={{ flexBasis: "450px" }}
    data-delay="0"
  >
    <div
      className={"icon-text-advanced"}
      data-bg="{{ include.service.bg | relative_url }}"
    >
      <div className={"wrapper"}>
        <div className={"content"}>
          <img src={props.icon} alt={props.title} />
        </div>
      </div>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <div className={"spacing"}></div>
    </div>
  </div>
)

export default Service
