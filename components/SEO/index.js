import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import SEOObj from '../../content/seo.json'

const SEO = ({ title, description, image, pathname, article }) => {
  const seo = {
    title: title || SEOObj.siteMetadata.title,
    description: description || SEOObj.siteMetadata.description,
    image: `${SEOObj.siteMetadata.siteUrl}${image || SEOObj.siteMetadata.image}`,
    url: `${SEOObj.siteMetadata.siteUrl}${pathname || "/"}`,
  }
  return (
    <>
      <Helmet title={seo.title} titleTemplate={SEOObj.siteMetadata.titleTemplate}>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <script
          async
          defer
          data-domain="balazosdirecto.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && <meta property="og:image" content={seo.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        {SEOObj.siteMetadata.twitterUsername && (
          <meta name="twitter:creator" content={SEOObj.siteMetadata.twitterUsername} />
        )}
        {SEOObj.siteMetadata.instagramUsername && (
          <meta name="instagram:creator" content={SEOObj.siteMetadata.instagramUsername} />
        )}
        {SEOObj.siteMetadata.facebookUsername && (
          <meta name="facebook:creator" content={SEOObj.siteMetadata.facebookUsername} />
        )}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && (
          <meta name="twitter:description" content={seo.description} />
        )}
        {seo.image && <meta name="twitter:image" content={seo.image} />}
      </Helmet>
    </>
  )
}


export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
