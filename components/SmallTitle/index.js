import React from "react"
import Divider from "../Divider"

const SmallTitle = ({ text, hasDivider }) => {
  return (
    <>
      <h3 style={{textTransform: 'uppercase', color: '#edb713', marginBottom: '30px', letterSpacing: '4px', fontSize: '14px', fontWeight: 'bold'}}>{text}</h3>
      {hasDivider ? <Divider /> : null}
    </>
  )
}

export default SmallTitle
