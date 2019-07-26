// external stuff
import React from "react"
import { Link, graphql } from "gatsby";

// components
import SEO from "../components/seo";
import Navbar from "../components/navbar";

// assets & helpers

// style
import '../styles/main.scss';


class Sidebar extends React.Component {
  render(){
    return(
      <div id="sidebar-nav">

        <ul className="list-inline">

          <li className="list-item-accent">
            <Link to="/contact-us">contact</Link>
          </li>
          <li className="line-separator"></li>
          <li className="list-item-accent">
            <Link to="/">linkedin</Link>
          </li>
          <li className="list-item-accent">
            <Link to="/">instagram</Link>
          </li>
          <li className="list-item-accent">
            <Link to="/">dribbble</Link>
          </li>

        </ul>

      </div>
    )
  }
}

export default Sidebar;
