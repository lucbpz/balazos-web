import React from "react"
import Divider from "../Divider"
import styled from "styled-components"

const H3 = styled.h3`
  text-transform: uppercase;
  color: #edb713;
  margin-bottom: 30px;
  letter-spacing: 4px;
  font-size: 14px;
  font-weight: bold;
`
const SmallTitle = ({ text, hasDivider }) => {
  return (
    <>
      <H3>{text}</H3>
      {hasDivider ? <Divider /> : null}
    </>
  )
}

export default SmallTitle
