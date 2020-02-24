import React from "react"
import Description from "../../Description"

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
      <Description primary text={props.description} />
      <div className={"spacing"}></div>
    </div>
  </div>
)

export default Service
