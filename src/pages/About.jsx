// external stuff
import React from "react"
import { Link, graphql } from "gatsby";

// components
import SEO from "../components/seo";
import Layout from "../components/layout"
import Navbar from "../components/navbar";

// assets & helpers

// style
import '../styles/main.scss';

class AboutPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
  };

  revealContent = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  };

  hideContent = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  }

  render() {
    return(
      <React.Fragment>
        <div id="about-page" className="fullwidth-container">

        <div onClick={this.hideContent} className={`${this.state.showDetails ? 'show-details' : 'hide-details'} creative-studio text-anim`}>
          studio de création
        </div>

        <div className="fixed-content fullwidth fullheight">

          <p>cdltbisou est un <span className="text-stroked reveal-content" onClick={this.revealContent}>studio de création</span> et une agence de développement web</p>
        </div>

        </div>
      </React.Fragment>
    )
  }
}


export default AboutPage
