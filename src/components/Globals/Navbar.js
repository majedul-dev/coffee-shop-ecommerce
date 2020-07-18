import React, { useState } from "react"
import { Link } from "gatsby"
import { FaGulp, FaCartArrowDown } from "react-icons/fa"

import { navlinks } from "../../links/navlinks"

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [css, setCss] = useState("")

  const navbarHandeler = () => {
    if (navOpen === false) {
      setNavOpen(true)
      setCss("show")
    } else {
      setNavOpen(false)
      setCss("")
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <FaGulp className="nav-logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={navbarHandeler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${css}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav m-auto">
            {navlinks.map(link => (
              <li key={link.id} className="nav-item">
                <Link className="nav-link text-capitalize" to={link.path}>
                  {link.text}
                </Link>
              </li>
            ))}
            <li className="nav-item ml-sm-5">
              <FaCartArrowDown className="cart-icon snipcart-checkout" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
