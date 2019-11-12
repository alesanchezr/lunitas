import React from 'react'
import { Link } from 'gatsby'
import style from './style.scss'

class Navi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar">
        <div className="text-center d-block w-100">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand">{title}</h1>
          </Link>
        </div>
        <div className="container">
          <div className="navbar-nav w-100">
            <ul className="nav justify-content-center">
              <li
                className={`nav-item ${
                  location.pathname === '/' ? 'active' : ''
                }`}
              >
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === '/profile' ? 'active' : ''
                }`}
              >
                <Link to="/profile/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === '/products' ? 'active' : ''
                }`}
              >
                <Link to="/products/" className="nav-link">
                  Products
                </Link>
              </li>
              <li
                className={`nav-item ${
                  location.pathname === '/' ? '/services' : ''
                }`}
              >
                <Link to="/services/" className="nav-link">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default Navi
