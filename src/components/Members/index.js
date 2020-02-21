import React from "react"
import SectionTitle from "../SectionTitle"
import Member from "./Member"

const data = [
  {
    id: 0,
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/fran.png",
    name: "Fran Escalante",
    position: "Vocalista",
    socials: [
      { link: "http://facebook.com", icon: "facebook" },
      { link: "http://instagram.com", icon: "instagram" },
    ],
    desc:
      "Un día salió de casa, se dejó la vergüenza en la mesita de noche, y ya nunca volvió a saber de ella. Además de cantar con nosotros, se dedica a componer coplas de Carnaval y a llevar su chirigota por los mejores concursos de Andalucía.",
  },
  {
    id: 1,
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/luis.png",
    name: "Luis Ortega",
    position: "Guitarra solista",
    socials: [
      { link: "http://facebook.com", icon: "facebook" },
      { link: "http://instagram.com", icon: "instagram" },
    ],
    desc:
      "Ni Clint Eastwood le ganaría en un duelo de dedos más rápidos. Su Gibson viaja con él allá donde va, por los grupos más insólitos de la comarca. Nuestro último fichaje de la temporada de invierno, que esperemos que nos haga ganar copas (o al menos, que invite)",
  },
  {
    id: 2,
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/acacio.png",
    name: "José Manuel Acacio",
    position: "Guitarra rítmica",
    socials: [
      { link: "http://twitter.com", icon: "twitter" },
      { link: "http://facebook.com", icon: "facebook" },
    ],
    desc:
      "El Doctor del grupo. Aunque la medicina en la que confía no se basa en los químicos, quita cualquier enfermedad a base de acordes. Otro gran compositor de coplas de carnaval, un clásico entre nosotros, y que lleva casi toda la vida atado a una guitarra.",
  },
  {
    id: 3,
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/lucas.png",
    name: "Lucas Bernalte",
    position: "Bajista",
    socials: [
      { link: "http://twitter.com", icon: "twitter" },
      { link: "http://facebook.com", icon: "facebook" },
    ],
    desc:
      "Nuestro miembro más internacional, se ha recorrido medio mundo en busca de inspiración para componer, pero parece que todavía no la ha encontrado. Eso sí, dale un instrumento nuevo y aprenderá a tocarlo en menos de 1 hora! El Solari del grupo!",
  },
  {
    id: 4,
    avatar:
      "https://gitlab.com/lucbpz/balazos-web/-/raw/master/assets/images/@stock/juan.png",
    name: "Juan Ortega",
    position: "Batería",
    socials: [
      { link: "http://twitter.com", icon: "twitter" },
      { link: "http://facebook.com", icon: "facebook" },
    ],
    desc:
      "Empezó a tocar la batería dando baquetazos a un sofá, de ahí ha pasado por el bajo eléctrico, la guitarra, director musical de agrupaciones de carnaval, y entre sus últimos descubrimientos, el piano. Dedicación máxima y motivación describen a este crack!",
  },
]

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
        {data.map(member => (
          <Member
            key={member.id}
            avatar={member.avatar}
            name={member.name}
            position={member.position}
            socials={member.socials}
            desc={member.desc}
          />
        ))}
      </div>
    </>
  )
}

export default Members
