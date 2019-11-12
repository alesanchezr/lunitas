import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/navi'
import Footer from 'components/footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <div
          id="snipcart"
          data-api-key="NzI5M2QyOWUtMjc4Ny00NWFiLWI5NGYtOGVlYTFkZTY3NGViNjM3MDkxMzQwOTgyNTg4NjIy"
          hidden
        ></div>
        <Navi
          title={siteMetadata.title}
          subtitle={siteMetadata.subtitle}
          {...this.props}
        />
        {children}
        <Footer title={siteMetadata.title} author={siteMetadata.author} />
      </div>
    )
  }
}

export default Layout
