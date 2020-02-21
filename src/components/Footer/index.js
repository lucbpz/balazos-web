import React from "react"

const Footer = props => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={"full no-padding dark"}>
      <div className={"four spacing"}></div>
      <div id="footer" className={"centered-text"}>
        <div className={"row"}>
          <div className={"large-12 columns"}>
            <h4>©{currentYear} Balazos. Made with love by Lucas</h4>
          </div>
        </div>
      </div>
      <div className={"four spacing"}></div>
    </div>
  )
}

export default Footer
