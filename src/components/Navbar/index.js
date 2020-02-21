import React from "react"

const sections = [
  { id: 0, name: "INICIO" },
  { id: 1, name: "SERVICIOS" },
  { id: 2, name: "TRABAJOS" },
  { id: 3, name: "SOBRE NOSOTROS" },
  { id: 4, name: "EL GRUPO" },
  { id: 5, name: "CONTACTO" },
]
export default () => (
  <div className={"transparent fullwidth white fixed contain-to-grid"}>
    <nav className={"top-bar onepage"} data-options="" data-topbar="">
      <ul className={"title-area"}>
        <li className={"name"}>
          <h1>
            <img
              style={{ paddingLeft: "1rem" }}
              width="126"
              height="48"
              alt=""
              src="https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/balazos-logo.png"
            />
          </h1>
        </li>
      </ul>
      <div id="menu-toggler" className={"right"}>
        <span>
          <i className={"fa fa-bars"}></i>
          Menu
        </span>
      </div>
      <section className={"top-bar-section closed"}>
        <ul className={"right"}>
          {sections.map(section => (
            <li key={section.id}>
              <a href={section.path}>{section.name}</a>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  </div>
)
