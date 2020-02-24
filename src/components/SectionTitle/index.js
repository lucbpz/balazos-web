import React from "react"
import SmallTitle from "../SmallTitle"

const SectionTitle = props => {
  return (
    <div className={"full"}>
      <div className={"row"}>
        <div className={"large-8 columns large-centered"}>
          <div className={"section-title"}>
            <SmallTitle text={props.smallTitle} />
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTitle
