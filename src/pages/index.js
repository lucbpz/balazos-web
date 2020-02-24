import React from "react"
import { graphql } from "gatsby"
import Hero from "../components/Hero"
import Services from "../components/Services"
// import Navbar from "../components/Navbar"
import InstagramContainer from "../components/InstagramContainer"
import SectionTitle from "../components/SectionTitle"
import InvertedSectionTitle from "../components/InvertedSectionTitle"
import Members from "../components/Members"
import References from "../components/References"
import ContactForm from "../components/ContactForm"
import Social from "../components/Social"
import Footer from "../components/Footer"

const Home = ({
  data: { allInstaNode, rawMembers, rawServices, rawReferences },
}) => (
  <div className={"f-topbar-fixed"}>
    {/* <Navbar /> */}
    <div id="main" className={"top-shift"}>
      <Hero />
      <Services id="services" services={mapNodes(rawServices)} />
      <InstagramContainer nodes={allInstaNode} />
      <SectionTitle
        title="Nos gusta lo que hacemos"
        smallTitle="EXPERIENCIA CREATIVA Y DIVERTIDA"
      />
      <InvertedSectionTitle
        title="Estamos hechos el uno para el otro"
        subtitle="Cuéntanos qué te gustaría tener en tu evento y nosotros te lo ofrecemos."
        logo="youtube-logo"
      />
      <Members members={mapNodes(rawMembers)} />
      <References references={mapNodes(rawReferences)} />
      <ContactForm />
      <Social />
      <Footer />
    </div>
  </div>
)

const mapNodes = data =>
  data.edges
    .map(edge => edge.node.childMarkdownRemark.frontmatter)
    .sort((a, b) => a.order - b.order)

export const pageQuery = graphql`
  query GetMembersAndScrapingQuery {
    allInstaNode: allInstaNode(filter: { username: { eq: "balazosdirecto" } }) {
      edges {
        node {
          id
          username
          likes
          caption
          comments
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
    rawMembers: allFile(filter: { sourceInstanceName: { eq: "members" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              order
              name
              avatar
              position
              description
              socials
            }
          }
        }
      }
    }
    rawMembers: allFile(filter: { sourceInstanceName: { eq: "members" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              order
              name
              avatar
              position
              description
              socials
            }
          }
        }
      }
    }
    rawServices: allFile(filter: { sourceInstanceName: { eq: "services" } }) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              order
              title
              icon
              description
            }
          }
        }
      }
    }
    rawReferences: allFile(
      filter: { sourceInstanceName: { eq: "references" } }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              order
              author
              avatar
              description
            }
          }
        }
      }
    }
  }
`
export default Home
