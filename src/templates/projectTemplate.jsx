// external stuff
import React from "react"
import { graphql } from "gatsby";

// components
// import SEO from "../components/seo";
// import Sidebar from "../components/sidebar";
// import Navbar from "../components/navbar";

// assets & helpers
// import Cdltbisou from "../images/cdltbisou.svg";
// import Etcaetera from "../images/tagline.svg";

// style
import '../styles/main.scss';


class ProjectTemplate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showInformations: false
    }
  }

  handleClick = (e) => {
    console.log('prout')
    this.setState({
      showInformations: !this.state.showInformations
    })
  }


  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    return(
      <div className="project main-container">

      <div className="project-header">

        <div className="project-title">
          <p className="project-date">{frontmatter.date}</p>
          <h1 className="project-name">{frontmatter.title}</h1>
          <h5 className="project-meta">{frontmatter.categories}</h5>
        </div>

        <div className="project-infos">
          <h3 onClick={this.handleClick}>plus d'infos</h3>
          <div className={`project-infos-content ${this.state.showInformations ? 'show-infos' : 'hide-infos'}`}>
            <p id="close-info-toggle" onClick={this.handleClick}>fermer</p>

            <div className="info-year">
              <h6>année /</h6>
              <p>2018</p>
            </div>

            <div className="info-skills">
              <h6>skills /</h6>
              <p>branding - webdesign - web dévoppement - typographie - DA - print</p>
            </div>

            <div className="info-description">
              <h6>description /</h6>
              <p>image de marque pour la pâtisserie esmepim.</p>
            </div>

            <div className="info-client">
              <h6>client /</h6>
              <p>esmepim.</p>
            </div>

            <div className="info-link">
              <h6>voir le site</h6>
            </div>

          </div>
        </div>
        <img src={frontmatter.featured} alt=""/>
      </div>
      {/* end of .project-header */}





        {/* all the content from the .md file */}
        <div
          className="project-content"
           dangerouslySetInnerHTML={{ __html: html }}
          />

      </div>
    )
  }

}

export default ProjectTemplate


export const projectQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        categories
        description
        featured
      }
    }
  }
`


