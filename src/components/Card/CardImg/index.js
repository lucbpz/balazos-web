import React from "react"

function CardImg({ imgUrl }) {
  return (
    <div className="CardImg">
      <img src={imgUrl} alt="cat" />
    </div>
  )
}

export default CardImg
