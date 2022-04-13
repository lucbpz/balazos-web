import React from "react"

const Description = ({ text, primary, children }) => {
  return (
    <>
      <p
        style={{
          marginBottom: "15px",
          color: primary ? "#808080" : "#ccc",
          fontSize: "16px",
          fontWeight: "400",
          letterSpacing: "1px",
          lineHeight: "1.6em",
        }}
      >
        {text}
      </p>
      {children}
    </>
  )
}

export default Description
