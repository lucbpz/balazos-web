import React from "react"

const Social = props => {
  return (
    <div
      className={"full parallax social-networks"}
      style={{
        backgroundImage: "url(/balazos-fabrica-2.jpg)",
      }}
    >
      <div className={"two spacing"}></div>
      <div className={"row"}>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://facebook.com/balazosdirecto">
              <i className={"fa fa-facebook"}></i>
            </a>
            <h4>Facebook</h4>
            <p>Síguenos en facebook</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://instagram.com/balazosdirecto">
              <i className={"fa fa-instagram"}></i>
            </a>
            <h4>Instagram</h4>
            <p>Síguenos en instagram</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="http://twitter.com/balazosdirecto">
              <i className={"fa fa-twitter"}></i>
            </a>
            <h4>Twitter</h4>
            <p>Síguenos en twitter</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
        <div className={"medium-3 columns"}>
          <div className={"big-social"}>
            <a href="https://www.youtube.com/channel/UC3_CxMsHZCWuVUnIEixaIhg">
              <i className={"fa fa-youtube"}></i>
            </a>
            <h4>YouTube</h4>
            <p>Mira nuestro canal de youtube</p>
          </div>
          <div className={"two spacing"}></div>
        </div>
      </div>
      <div className={"two spacing"}></div>
    </div>
  )
}

export default Social
