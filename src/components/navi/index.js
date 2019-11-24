import React, { useState } from 'react'
import { Link } from 'gatsby'
import style from './style.scss'
import { FaBars } from 'react-icons/fa'

const MenuList = ({ className }) => (
  <ul className={className}>
    <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
      <Link to="/" className="nav-link">
        Home
      </Link>
    </li>
    <li
      className={`nav-item ${location.pathname === '/profile' ? 'active' : ''}`}
    >
      <Link to="/about/" className="nav-link">
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
    <li className={`nav-item ${location.pathname === '/' ? '/services' : ''}`}>
      <Link to="/services/" className="nav-link">
        Services
      </Link>
    </li>
  </ul>
)

const Navi = ({ location, title, subtitle }) => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="navbar">
      <div className="text-center d-block w-100">
        <Link className="navbar-brand text-center mobile d-sm-none" to="/">
          <h1>{title}</h1>
          <h3 className="subtitle">{subtitle}</h3>
        </Link>
        <Link className="navbar-brand text-center d-none d-sm-block" to="/">
          <h1>{title}</h1>
          <h3 className="subtitle">{subtitle}</h3>
        </Link>
        <button
          className="navbar-toggler d-sm-none"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon">
            <FaBars />
          </span>
        </button>
        <div className={`collapse navbar-collapse ${open ? 'show' : ''}`}>
          <MenuList className="navbar-nav mr-auto" />
          <span className="navbar-text">
            Navbar text with an inline element
          </span>
        </div>
      </div>
      <div className="container d-none d-sm-block">
        <div className="navbar-nav w-100">
          <MenuList className="nav justify-content-center" />
        </div>
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
  )
}

export default Navi
