import React from "react"
import SmallTitle from "../SmallTitle"
import Description from "../Description"

export default () => (
  <div className={"full no-padding parallax home-video-wrapper"}>
    <div className={"fullscreen"}>
      <video autoPlay id="fullscreen-video" loop muted>
        <source src={"/static/hero.mp4"} type="video/mp4" />
        <track
          default
          kind="captions"
          srcLang="en"
          src="/media/examples/friday.vtt"
        />
      </video>
      <div className={"overlay"}></div>
      <div className={"layer"}>
        <SmallTitle text="Un punto de contacto para toda tu música" />
        <h1 className={"thin"} id="to-be-update">
          <span className={"sec"}>Tu voz</span>
          <br />
          <span className={"fir"}>Tu música</span>
          <br />
          <span className={"thir"}>Balazos</span>
        </h1>
        {/* <h2 className={"thin"}>
          Somos Balazos. Un grupo de músicos con mucha inquietud y ganas de
          hacerte pasar un buen rato. Con nosotros podrás disfrutar en todos los
          momentos: música de ambiente, acústicos, y una banda completa de rock!
          {/* {% assign nav_obj = site.data.nav | where:'section_id','works' | first %} }
          <a href='{{ "index.html" | append:nav_obj.path | relative_url }}'>
            {" "}
            Mira nuestro trabajo
          </a>
        </h2> */}
        <Description
          style={{ width: "80%" }}
          text="Somos Balazos. Un grupo de músicos con mucha inquietud y ganas de
          hacerte pasar un buen rato. Con nosotros podrás disfrutar en todos los
          momentos: música de ambiente, acústicos, y una banda completa de rock!"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/channel/UC3_CxMsHZCWuVUnIEixaIhg"
          >
            Mira nuestro trabajo
          </a>
        </Description>
      </div>
    </div>
  </div>
)
