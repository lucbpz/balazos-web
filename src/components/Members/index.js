import React from "react"
import SectionTitle from "../SectionTitle"
import Member from "./Member"

const Members = props => {
  return (
    <>
      <SectionTitle title="Hola! Estos somos nosotros." smallTitle="EL GRUPO" />
      <div
        className={"members"}
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {props.members.map(member => (
          <Member
            key={member.order}
            avatar={member.avatar}
            name={member.name}
            position={member.position}
            socials={member.socials}
            desc={member.description}
          />
        ))}
      </div>
    </>
  )
}

export default Members
