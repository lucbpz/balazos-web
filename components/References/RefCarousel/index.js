import React from "react"
import { Grommet, Box, Carousel } from "grommet"
import Description from "../../Description"

const RefCarousel = ({ initialChild, references, ...props }) => {
  return (
    <Grommet>
      <Box align="center">
        <Carousel initialChild={initialChild} {...props}>
          {references.map(reference => (
            <Box key={reference.order}>
              <p className={"quote"}>{reference.description}</p>
              <div className={"two spacing"}></div>
              <div className={"author"}>
                <p className={"author-avatar"}>
                  <img width="80" height="80" alt="" src={reference.avatar} />
                </p>
                <p className={"author-name"}>
                  <strong>{reference.author}</strong>
                </p>
              </div>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Grommet>
  )
}

export default RefCarousel
