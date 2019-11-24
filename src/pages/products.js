import { graphql } from 'gatsby'
import get from 'lodash/get'
import Img from 'gatsby-image'
import React from 'react'

import { siteMetadata } from '../../gatsby-config'
import Layout from 'components/layout'
import Meta from 'components/meta'
import Icon from 'components/icon'
import Product from 'components/product'

class Products extends React.Component {
  render() {
    const { location, data } = this.props
    const lunitaImg = get(data, 'lunitas.childImageSharp.fixed')
    const marquesaImg = get(data, 'marquesa.childImageSharp.fixed')
    const brownieImg = get(data, 'chocolate.childImageSharp.fixed')
    const appleImg = get(data, 'apple.childImageSharp.fixed')
    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Profile" />
        <div>
          <section className="text-center p-0">
            <div className="row">
              <div className="col-12 mx-auto text-center">
                <Product
                  title="Lunita"
                  image={lunitaImg}
                  id={1}
                  price={'250'}
                  description={
                    'Fine Almond cookies, out most famost recipe so soft that it will break when in your mouth.'
                  }
                  url=""
                />
              </div>
              <div className="col-12 mx-auto text-center">
                <Product
                  title="Hard Markesa"
                  image={marquesaImg}
                  id={1}
                  price={'250'}
                  description={
                    'With the perfect combination between dark and milk chocolate and frezerd rock hard. This is how the Chocolate Marquesa should be made'
                  }
                  url=""
                />
              </div>
              <div className="col-12 mx-auto text-center">
                <Product
                  title="Chocolate Joy"
                  image={brownieImg}
                  id={1}
                  price={'250'}
                  description={
                    'Inspired on a 50 year old brownie recipe, this Chocolate cake will remind you of your chilhood but with a modern taste that makes this our most popular cake.'
                  }
                  url=""
                />
              </div>
              <div className="col-12 mx-auto text-center">
                <Product
                  title="Apple Cake"
                  image={appleImg}
                  id={1}
                  price={'250'}
                  description={
                    'The Royal Crown, family recipe that combines apple tast with the traditional coffe cake'
                  }
                  url=""
                />
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
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    apple: file(name: { eq: "apple-cake" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    chocolate: file(name: { eq: "chocolate" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    marquesa: file(name: { eq: "marquesa" }) {
      childImageSharp {
        fixed(width: 220, height: 220) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
