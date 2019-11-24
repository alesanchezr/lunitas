import React from 'react'
import Img from 'gatsby-image'
import style from './style.scss'

const Product = ({ title, image, id, price, description, url }) => (
  <div className="card product">
    <Img sizes={image} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
      <button
        type="button"
        className="btn btn-primary snipcart-add-item"
        data-item-id={2}
        data-item-price={'20'}
        data-item-image={image.src}
        data-item-name={'android'}
        data-item-description={'my super sa'}
        data-item-url={'http://lunitasbakery.com/android'}
      >
        Add To Cart
      </button>
    </div>
  </div>
)

export default Product
