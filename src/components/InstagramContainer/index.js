import React from "react"
import { Box, Heading, Text } from "grommet"
import InstagramPosts from "../InstagramPosts"
import SectionTitle from "../SectionTitle"

const InstagramContainer = ({ title, text, nodes }) => {
  return (
    <Box>
      <SectionTitle
        title="Qué hemos estado haciendo últimamente."
        smallTitle="Echa un vistazo"
      />
      <Box background="white">
        <Heading alignSelf="center" level="4">
          {title}
        </Heading>
        <Box pad="small" width="large" alignSelf="center">
          <Text margin={{ bottom: `medium` }}>{text}</Text>
        </Box>
      </Box>

      <InstagramPosts nodes={nodes} />
    </Box>
  )
}

export default InstagramContainer
