import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image, keywords, lang, meta }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  return (
    <Helmet
    htmlAttributes={{
      lang,
    }}
    title={seo.title}
    titleTemplate={titleTemplate}
    meta={[
      {
        name: `description`,
        content: seo.description,
      },
      {
        property: `og:title`,
        content: seo.title,
      },
      {
        property: `og:url`,
        content: seo.url,
      },
      {
        property: `og:description`,
        content: seo.description,
      },
      {
        property: `og:type`,
        content: `website`,
      }
    ]
      .concat(seo.image ? [
        {
          property: `og:image`,
          content: seo.image
        },
        {
          property: `og:image:alt`,
          content: seo.title,
        }
      ] : [])
      .concat(
        keywords.length > 0
          ? {
              name: `keywords`,
              content: keywords.join(`, `),
            }
          : []
      )
      .concat(meta)
    }
  />
  )
}
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  lang: `en`,
  keywords: [],
  meta: [],
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`