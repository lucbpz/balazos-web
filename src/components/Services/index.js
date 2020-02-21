import React from "react"
import SectionTitle from "../SectionTitle"
import Service from "./Service"

const Services = props => {
  const data = [
    {
      title: "Acústicos",
      icon: "fa fa-bell-o",
      desc:
        "Un concierto en acústico para amenizar una ceremonia, cocktail o recepción de una boda. ¿Te gusta Ed Sheeran? Tenemos un pedal de loop para hacer canciones como las hace él. ¿Una sola persona es capaz de sonar como una banda? Sí. Y nos gusta.",
      bg: "/assets/images/@stock/service-item-1-bg.jpg",
    },
    {
      title: "Trío de jazz",
      icon: "fa fa-lightbulb-o",
      desc:
        "Desde los estándares de jazz hasta algún tema pop versionado para dar ambiente y a la vez haceros disfrutar con melodías e improvisaciones maravillosas de nuestros músicos. Además, un ratito para gustarnos a nosotros mismos.",
      bg: "/assets/images/@stock/jazz.jpg",
    },
    {
      title: "Grupo de pop/rock",
      icon: "fa fa-bookmark-o",
      desc:
        "Una composición de vocalista, 2 guitarras eléctricas, bajo y batería, con un toque rockero y canalla, que te hará participar y bailar con los temas más sonados de los 80 (aunque sean de otra época, nosotros siempre decimos que son de los 80).",
      bg: "/assets/images/@stock/rock-band.jpg",
    },
    {
      title: "DJ",
      icon: "fa fa-heart-o",
      desc:
        "Tenemos un fabuloso DJ y animador que pondrá esa música que tanto recuerdas cuando salías en tus años mozos, con aquellos primeros ligoteos, y te hará bailar tanto que no podrás aguantar el ritmo! Agujetas aseguradas al día siguiente. En forma con Balazos!",
      bg: "/assets/images/@stock/service-item-4-bg.jpg",
    },
    {
      title: "Flamenquito",
      icon: "fa fa-flag-o",
      desc:
        "También sabemos coger una guitarra flamenca, un cajón y un micrófono, y cantar con alegría y con arte lo que siempre escuchas en reuniones y barbacoas con amigos. Y si hace falta nos ponemos serios y cantamos por Camarón. Con palmas y a lo loco.",
      bg: "/assets/images/@stock/service-item-5-bg.jpg",
    },
    {
      title: "Otros detalles",
      icon: "fa fa-comment-o",
      desc:
        "¿Hace falta escenario en una hacienda? ¿Hace falta material para el bolo? Podemos encargarnos de ciertos detalles que falten en el evento relacionados con la música, para que no te tengas que preocupar de nada. Incluso puede que haya alguna sorpresa :).",
      bg: "/assets/images/@stock/service-item-6-bg.jpg",
    },
  ]
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
        {data.map(section => (
          <Service
            key={section.bg}
            title={section.title}
            icon={section.icon}
            desc={section.desc}
            bg={section.bg}
          />
        ))}
      </div>
    </>
  )
}

export default Services
