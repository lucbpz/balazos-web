import React from "react"
// import { Carousel, Image } from "grommet"
import RefCarousel from "./RefCarousel"

const References = props => {
  return (
    <div
      className={"full no-overflow no-padding parallax"}
      style={{
        backgroundImage: "url(/balazos-bodeguita.jpg)",
      }}
    >
      <div className={"left-half"}>
        <div className={"two spacing"}></div>
        <div className={"row"}>
          <div className={"section-header alt white"}>
            <h2>Qué dicen de nosotros</h2>
          </div>
          <RefCarousel
            controls={false}
            play={6000}
            references={props.references}
          />
        </div>
      </div>
    </div>
  )
}

export default References
