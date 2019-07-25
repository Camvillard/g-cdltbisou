// external stuff
import React from "react"
import {Link} from "gatsby"

// components

// assets & helpers

// style

class Navbar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: false,
      search: false
    }
  }

  handleClick = (e) => {
    const target = e.target.dataset.open
    target === 'menu' ?
      this.setState({menu: !this.state.menu}) :
      this.setState({search: !this.state.search})


  }

  render() {

    return(
      <React.Fragment>
        <div id="navbar">

          {/* handles menu opening */}
          <p className={`navbar-link toggle-menu ${this.state.menu ? 'close' : 'open'}`} data-open="menu" onClick={this.handleClick}>
            {`${this.state.menu ? 'fermer' : 'menu'}`}
          </p>

          {/* handles search opening */}
          <p className={`navbar-link toggle-search ${this.state.search ? 'close' : 'open'}`} data-open="search" onClick={this.handleClick}>
            {`${this.state.search ? 'fermer' : 'chercher'}`}
          </p>

        </div>

        <div id="inner-nav">
          <div id="main-menu" className={`${this.state.menu ? 'open-menu' : 'hide-menu'}`}>
            <ul className="list-fullwidth">
              <li className="item-white">
                <Link to="/">_voir les projets,</Link>
              </li>
              <li className="item-white">
                <Link to="/contact-us">_contact,</Link>
              </li>
              <li className="item-white">
                <Link to="/">_à propos,</Link>
              </li>
              <li className="item-white">
                <Link to="/">_shop,</Link>
              </li>
              <li className="item-white">
                <Link to="/">_bucket list.</Link>
              </li>
            </ul>
          </div>

          <div id="nav-search" className={`${this.state.search ? 'open-search' : 'hide-search'}`}>
            search
          </div>
        </div>



      </React.Fragment>

    )
  }
}

export default Navbar;
