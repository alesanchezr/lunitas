import React from 'react'
import styles from './styles.scss'
import { FaShoppingCart } from 'react-icons/fa'

const Cart = () => (
  <div className="cart">
    <button className="btn snipcart-checkout">
      <FaShoppingCart />
      <span className="snipcart-items-count"></span>
    </button>
  </div>
)

export default Cart
