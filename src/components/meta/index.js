import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'

const Meta = ({ site, title, subtitle }) => {
  const siteTitle = get(site, 'title')
  title = title ? `${title} | ${siteTitle}` : siteTitle
  return (
    <Helmet
      title={title}
      meta={[
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:site',
          content: `@${get(site, 'twitter')}`,
        },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:description',
          content: get(site, 'description'),
        },
        {
          property: 'og:url',
          content: `${get(site, 'siteUrl')}/profile`,
        },
        {
          property: 'og:image',
          content: `${get(site, 'siteUrl')}/img/profile.jpg`,
        },
      ]}
    >
      <script src="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.js"></script>
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.2/default/snipcart.css"
      />
      <div
        id="snipcart"
        data-api-key="NzI5M2QyOWUtMjc4Ny00NWFiLWI5NGYtOGVlYTFkZTY3NGViNjM3MDkxMzQwOTgyNTg4NjIy"
        hidden
      ></div>
    </Helmet>
  )
}
export default Meta
