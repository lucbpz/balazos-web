import React from "react"
import styled, { css } from "styled-components"

const P = styled.p`
  margin-bottom: 15px;
  color: #ccc;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  letter-spacing: 1px;
  line-height: 1.6em;

  ${props =>
    props.primary &&
    css`
      color: #808080;
    `};
`
const Description = ({ text, primary, children }) => (
  <>
    <P primary={primary}>{text}</P>
    {children}
  </>
)

export default Description
