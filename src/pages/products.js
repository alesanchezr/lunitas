import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'

class Products extends React.Component {
  render() {
    const { location, data } = this.props
    const lunitas = get(data, 'lunitas.childImageSharp.fixed')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <section id="cakes" className="text-center container">
            <h2>Cakes</h2>
            <div className="row">
              <div className="col-md-6 mx-auto text-center p-3">
                <div className="card">
                  <img src={lunitas} className="card-img-top" alt="Lunitas" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <button
                      className="btn btn-primary"
                      data-item-id={2}
                      data-item-price={'20'}
                      data-item-image={post.frontmatter.image}
                      data-item-name={'android'}
                      data-item-description={'my super sa'}
                      data-item-url={'http://lunitasbakery.com/android'}
                    >
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto text-center p-3">
                <div className="card">
                  <img src={lunitas} className="card-img-top" alt="Lunitas" />
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the cards content.
                    </p>
                    <button
                      className="btn btn-primary"
                      data-item-id={1}
                      data-item-price={'20'}
                      data-item-image={post.frontmatter.image}
                      data-item-name={'Iphone'}
                      data-item-description={'my super duper'}
                      data-item-url={'http://lunitasbakery.com/iphone'}
                    >
                      Go somewhere
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default Products

export const query = graphql`
  query ProductsPageQuery {
    lunitas: file(name: { eq: "lunitas" }) {
      childImageSharp {
        fixed(width: 120, height: 120) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
