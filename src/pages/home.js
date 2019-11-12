import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Home extends React.Component {
  render() {
    const { location, data } = this.props
    const marquesa = get(data, 'marquesa.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <section id="features" className="text-center jumboimage">
            <Img sizes={marquesa} className="cover-image" />
            <div className="container">
              <div className="row cover-over">
                <div className="col-md-12 text-left">
                  <h2 className="section-heading">Features</h2>
                  <p>
                    I'm a front-end engineer in Japan 🗼
                    <br />
                    Used to be a designer of furniture and architecture.
                    <br />
                  </p>
                  <li>2013 ~ 2017: J-CAST News</li>
                  <li>2017 ~ : Recruit Lifestyle</li>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Home

export const query = graphql`
  query HomePageQuery {
    marquesa: file(name: { eq: "marquesa" }) {
      childImageSharp {
        fixed(width: 320, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
