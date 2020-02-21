import React from "react"

export default () => (
  <div className={"full no-padding parallax home-video-wrapper"}>
    <div className={"fullscreen"}>
      <video autoPlay="autoplay" id="fullscreen-video" loop="loop">
        <source
          src="https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/cover-video.optimized.mp4"
          type="video/mp4"
        />
        <track
          default
          kind="captions"
          srcLang="en"
          src="/media/examples/friday.vtt"
        />
      </video>
      <div className={"overlay"}></div>
      <div className={"layer"}>
        <p className={"small title"}>
          Un punto de contacto para toda tu música
        </p>
        <h1 className={"thin"} id="to-be-update">
          <span className={"sec"}>Tu voz</span>
          <br />
          <span className={"fir"}>Tu música</span>
          <br />
          <span className={"thir"}>Balazos</span>
        </h1>
        <h2 className={"thin"}>
          Somos Balazos. Un grupo de músicos con mucha inquietud y ganas de
          hacerte pasar un buen rato. Con nosotros podrás disfrutar en todos los
          momentos: música de ambiente, acústicos, y una banda completa de rock!
          {/* {% assign nav_obj = site.data.nav | where:'section_id','works' | first %} */}
          <a href='{{ "index.html" | append:nav_obj.path | relative_url }}'>
            {" "}
            Mira nuestro trabajo
          </a>
        </h2>
      </div>
    </div>
  </div>
)
