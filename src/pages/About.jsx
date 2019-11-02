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

  toggleContent = () => {
    this.setState({
      showDetails: !this.state.showDetails
    })
  };


  render() {
    return(
      <React.Fragment>
        <div id="about-page" className="fullwidth-container">

        <div onClick={this.toggleContent} className={`${this.state.showDetails ? 'show-details' : 'hide-details'} creative-studio text-anim`}>
          <h6>studio de création</h6>
          <p>c'est à dire qu'on est capable de fabriquer un projet de a à z, que ce soit du brand, du print, de la création de contenu</p>
          <p>ok d'accord c'est cool</p>
        </div>

        <div className="fixed-content fullwidth fullheight">


        <div className="about-content">
          <p>cdltbisou est un
            <span
            className="text-stroked dark-blue toggle-content"
            onClick={this.toggleContent}>
              studio de création
            </span>
             et de développement web basé à montréal (parce que l'hiver y est chouette) mais tout à fait capable de travailler dans la monde entier (parce que 2019 et Internet).
          </p>
        </div>

        </div>

        </div>
      </React.Fragment>
    )
  }
}


export default AboutPage
