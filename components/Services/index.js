import React from "react"
import SectionTitle from "../SectionTitle"
import Service from "./Service"

const Services = ({services}) => {
  return (
    <>
      <SectionTitle title="Qué hacemos." smallTitle="Servicios que ofrecemos" />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          flexWrap: "wrap",
        }}
      >
        {(services || []).map(section => (
          <Service
            key={section.order}
            title={section.title}
            icon={section.icon}
            description={section.description}
            bg={section.bg}
          />
        ))}
      </div>
    </>
  )
}

export default Services
