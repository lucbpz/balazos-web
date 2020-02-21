import React from "react"
import PropTypes from "prop-types"
import CardImg from "./CardImg"
import CardText from "./CardText"
import "./styles.css"

const Card = ({ name, description, imgUrl }) => {
  return (
    <div className="Card">
      <CardImg imgUrl={imgUrl} />
      <CardText name={name} description={description} />
    </div>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  imgUrl: PropTypes.string,
}

export default Card
