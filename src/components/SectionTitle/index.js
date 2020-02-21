import React from "react"

const SectionTitle = props => {
  return (
    <div className={"full"}>
      <div className={"row"}>
        <div className={"large-8 columns large-centered"}>
          <div className={"section-title"}>
            <p className={"small-title"}>{props.smallTitle}</p>
            <h2>{props.title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTitle
