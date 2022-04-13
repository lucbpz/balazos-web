import React from "react"
import Hero from "../components/Hero"
import SecondHero from "../components/SecondHero"
import Services from "../components/Services"
// import Navbar from "../components/Navbar"
import Instagram from "../components/Instagram"
import SectionTitle from "../components/SectionTitle"
import InvertedSectionTitle from "../components/InvertedSectionTitle"
import Members from "../components/Members"
import References from "../components/References"
import ContactForm from "../components/ContactForm"
import Social from "../components/Social"
import Footer from "../components/Footer"
import SEO from "../components/SEO"
import Video from "../components/Video"
import { Box } from "grommet"

import members from '../content/members.json';
import references from '../content/references.json';
import services from '../content/services.json';

const Home = ({rawMembers, rawServices, rawReferences}) => (
  <div className={"f-topbar-fixed"}>
    {/* <Navbar /> */}
    <SEO />
    <div id="main" className={"top-shift"}>
      <Hero />
      <Services id="services" services={rawServices} />
      <SecondHero />
      <Box>
        <SectionTitle
          title="Qué hemos estado haciendo últimamente."
          smallTitle="Echa un vistazo"
        />
        {/* <Instagram />  */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <Video 
          videoSrcURL="https://www.youtube.com/embed/XsUvla35UY4"
          videoTitle="Grupo Balazos"
        />
        </div>
      </Box>
      <SectionTitle
        title="Nos gusta lo que hacemos"
        smallTitle="EXPERIENCIA CREATIVA Y DIVERTIDA"
      />
      <InvertedSectionTitle
        title="Estamos hechos el uno para el otro"
        subtitle="Cuéntanos qué te gustaría tener en tu evento y nosotros te lo ofrecemos."
        logo="youtube-logo"
      />
      <Members members={rawMembers} />
      <References references={rawReferences} />
      <ContactForm />
      <Social />
      <Footer />
    </div>
  </div>
)

export const getStaticProps = async () => {
  return {
    props: {
      rawMembers: members,
      rawReferences: references,
      rawServices: services,
    }
  }
}
export default Home
