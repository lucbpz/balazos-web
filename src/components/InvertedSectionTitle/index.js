import React from "react"

const InvertedSectionTitle = props => {
  return (
    <div className={"full dark no-padding"}>
      <div className={"four spacing"}></div>
      <div className={"row"}>
        <div className={"large-8 columns"}>
          <h3 className={"white"}>{props.title}</h3>
          <p>{props.subtitle}</p>
        </div>
        <div className={"large-4 columns"}>
          <p>
            <a
              className={"button small boxed"}
              href="https://www.youtube.com/channel/UC3_CxMsHZCWuVUnIEixaIhg"
            >
              Visita nuestro canal de YouTube
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InvertedSectionTitle
