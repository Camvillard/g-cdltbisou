// external stuff
import React from "react"

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
      <div id="navbar">

      <div id="main-menu" className={`${this.state.menu ? 'open-menu' : 'hide-menu'}`}>
        menu

      </div>

      <div id="nav-search" className={`${this.state.search ? 'open-search' : 'hide-search'}`}>
        search
      </div>

      <ul className="list-inline">
        <li className="navbar-link" data-open="menu" onClick={this.handleClick}>menu</li>
        <li className="navbar-link" data-open="search" onClick={this.handleClick}>search</li>
      </ul>

      </div>
    )
  }
}

export default Navbar;
