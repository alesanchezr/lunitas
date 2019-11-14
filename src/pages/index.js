import { graphql, Link } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

import { FaSearchLocation } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'

class Home extends React.Component {
  render() {
    const { location, data } = this.props
    const marquesa = get(data, 'marquesa.childImageSharp.fixed')
    const arrow = get(data, 'arrow.childImageSharp.fixed')
    console.log('the arrow', arrow)

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <section id="features" className="text-center jumboimage">
            <Img sizes={marquesa} className="cover-image" />
            <div className="row cover-over w-100">
              <div className="col-md-6 mx-auto text-center bg-white boxy text-dark p-3">
                <h2 className="section-heading">Baked Fresh to Order</h2>
                <p>
                  We bake our cookis fresh to order and they are available in a
                  variety of sizes and decorations.
                </p>
              </div>
            </div>
          </section>
          <section id="repos">
            <div className="container">
              <div style={{ top: '-150px' }} className="arrow">
                <Img
                  sizes={arrow}
                  style={{ height: '150px', width: '100px' }}
                  className="mx-auto"
                />
              </div>
              <div className="row mb-3">
                <div className="col-4 text-center mx-auto">
                  <Link className="btn btn-primary" to="/products">
                    Make an Order Now
                  </Link>
                </div>
              </div>
              <h1 className="text-center welcome-title">Welcome</h1>
              <div className="row">
                <div className="col-md-6 text-left">
                  What makes the perfect cupcake? Free-range eggs, no
                  preservatives and high-quality natural ingredients go into our
                  freshly baked sponges, which we lovingly hand bake and
                  decorate from scratch each day. It's home baking done Cupcakes
                  Bakery way.
                </div>
                <ul className="col-md-6 text-left contact-info">
                  <li>
                    <FaSearchLocation />
                    363 Aragon Ave, Coral Gables, FL.
                  </li>
                  <li>
                    <FaPhone /> +1 (786) 681-7901
                  </li>
                </ul>
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
    arrow: file(name: { eq: "arrow" }) {
      childImageSharp {
        fixed(width: 200, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
