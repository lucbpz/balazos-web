import React from "react"
// import { Carousel, Image } from "grommet"
import RefCarousel from "./RefCarousel"
import styles from "./styles.module.css"
import StyledBackgroundSection from "../BackgroundSection"

const References = props => {
  return (
    <StyledBackgroundSection
      src={"/static/img/bg/balazos-bodeguita.jpg"}
      className={""}
    >
      <div
        style={{ width: "100vw" }}
        className={`left-half ${styles['references-text-container']}`}
      >
        <div className={"two spacing"}></div>
        <div className={"row"}>
          <div className={"section-header alt"}>
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
