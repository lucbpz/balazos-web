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
          <div className={"mod modTestimonials simple"} data-connectors="1">
            <div className={"row"}>
              <div className={"small-12 columns"}>
                <div className={"items slick-initialized slick-slider"}>
                  <div className={"slick-list draggable"}>
                    <div
                      className={"slick-track"}
                      style={{
                        opacity: 1,
                        width: "1156px",
                        transform: "translate3d(-578px, 0px, 0px)",
                      }}
                    >
                      <RefCarousel
                        controls={false}
                        play={6000}
                        references={props.references}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default References
