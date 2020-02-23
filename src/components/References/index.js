import React from "react"
// import { Carousel, Image } from "grommet"
import RefCarousel from "./RefCarousel"

const data = [
  {
    id: 0,
    text:
      "Conté desde primera hora con ellos para mi caseta. Grupo muy formal y de los más divertidos que he visto. Pedazo de rato que te hacen pasar!! El año que viene más y mejor.",
    author: "Julián Benítez",
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/avatar-man-2.png",
  },
  {
    id: 1,
    text:
      "Si estás pensando en pasar un rato muy divertido y con buena música, y bien interpretada! Este es el grupo idóneo! He podido disfrutar de ellos en ferias y alguna que otra boda! Los mejores! Y formalidad 10! Espero que llegen muy lejos!",
    author: "Francisco José Oliva",
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/avatar-man-1.png",
  },
]
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
                        references={data}
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
