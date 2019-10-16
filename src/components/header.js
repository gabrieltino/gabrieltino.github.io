import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <nav className="navbar">
      <div className="container navflex">
        <Link to="/" className="logo-text">
          <i>Mimi </i>
        </Link>

        <div className="navigation">
          <input type="checkbox" class="nav-checkbox" id="nav-toggle" />

          <label className="nav-button" for="nav-toggle">
            <span className="nav-icon"> &nbsp;</span>
          </label>

          <div className="nav-bg">&nbsp;</div>

          <nav className="nav-nav">
            <ul className="navlinks">
              <li>
                <Link to="/" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" activeClassName="active">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
              {/* <li>
                <Link to="/blog" activeClassName="active">
                  Blog
                </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </nav>
  )
}

export default Header
