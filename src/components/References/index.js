import React from "react"
// import { Carousel, Image } from "grommet"
import RefCarousel from "./RefCarousel"
import "./styles.css"
import StyledBackgroundSection from "../BackgroundSection"

const References = props => {
  return (
    <StyledBackgroundSection
      src={"balazos-bodeguita.jpg"}
      className={"full no-overflow no-padding parallax"}
    >
      <div
        style={{ width: "100vw" }}
        className={"left-half references-text-container"}
      >
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
    </StyledBackgroundSection>
  )
}

export default References
