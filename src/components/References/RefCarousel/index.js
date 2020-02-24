import React from "react"
import { Grommet, Box, Carousel } from "grommet"

const RefCarousel = ({ initialChild, references, ...props }) => {
  return (
    <Grommet>
      <Box align="center" pad="large">
        <Carousel initialChild={initialChild} {...props}>
          {references.map(reference => (
            <Box key={reference.order} pad="xlarge">
              {/* <div
                className={"item slick-slide slick-cloned"}
                data-slick-index="-1"
                style={{ width: "289px" }}
              > */}
              <p className={"quote"}>{reference.description}</p>
              <div className={"two spacing"}></div>
              <div className={"author"}>
                <p className={"author-avatar"}>
                  <img width="80" height="80" alt="" src={reference.avatar} />
                </p>
                <p className={"author-name"}>
                  -<strong>{reference.author}</strong>
                </p>
              </div>
              {/* </div> */}
            </Box>
          ))}
        </Carousel>
      </Box>
    </Grommet>
  )
}

export default RefCarousel
