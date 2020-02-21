import React from "react"
import "./styles.css"

function CardText({ name, description }) {
  return (
    <div className="CardText">
      <div className="title">{name}</div>
      <div className="description">{description}</div>
    </div>
  )
}

export default CardText
