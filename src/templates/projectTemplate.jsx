// external stuff
import React from "react"
import { graphql, Link } from "gatsby";

// components
// import SEO from "../components/seo";
// import Sidebar from "../components/sidebar";
// import Navbar from "../components/navbar";

// assets & helpers
// import Cdltbisou from "../images/cdltbisou.svg";
// import Etcaetera from "../images/tagline.svg";

// style
import '../styles/main.scss';

const ProjectOverlay = ({project}) => {
  console.log({project})
  const infos = project.frontmatter
  return(
    <div className="project-background">

      <div className="project-banner-overlay">

        <img src={infos.featured} alt=""/>

        <div className="overlay-meta">

          <div className="overlay-skills">
            <h6>skills /</h6>
            <ul className="no-bullet">
              {infos.skills.split(',').map( skill => <li key={skill}>{skill}</li> )}
            </ul>
          </div>

          <div className="overlay-tools">
            <h6>tools /</h6>
            <ul className="no-bullet">
              {infos.tools.split(',').map( tool => <li key={tool}>{tool}</li> )}
            </ul>
          </div>
        </div>

        <div className="overlay-project">
          <h6>projet /</h6>
          <p>{infos.description}</p>
        </div>

        <div className="overlay-footer">
          <div className="overlay-name">
            <h1>{infos.title}</h1>
          </div>
          <div className="overlay-year">
            <h2 className="outline-text">{infos.date}</h2>
          </div>
          <div className="overlay-actions">
            <ul className="no-bullet">
              <li><a href="#project">voir projet en détail</a></li>
              <li><a href="#project">voir le site web</a></li>
              <li><Link to="#">projet précédent</Link></li>
              <li><Link to="#">projet suivant</Link></li>
            </ul>
          </div>
        </div>



      </div>

    </div>
  )
}


class ProjectTemplate extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      showInfos: false
    }
  }


  handleClick = (e) => {
    this.setState({
      showInfos: !this.state.showInfos
    });
  }


  render() {
    const { markdownRemark } = this.props.data
    const { frontmatter, html } = markdownRemark
    return(
      <React.Fragment>

        {typeof window !== "undefined" && window.innerWidth > 992 && (
          <ProjectOverlay project={{ frontmatter }} />
        )}

        <div className={`project-sidebar ${this.state.showInfos ? 'visible-infos' : 'hidden-infos'}`}>
          <p onClick={this.handleClick} className="toggle-infos">{this.state.showInfos ? "fermer" : "+ d'infos"}</p>
          <div className={`project-infos-content`}>

            <div className="info-year info-section">
              <h6>année /</h6>
              <p>2018</p>
            </div>

            <div className="info-description info-section">
              <h6>le projet /</h6>
              <p>concevoir l’image de marque de la  pâtisserie  esmepim, ainsi que les pièces de communication et  les sites web (vitrine + e-shop)</p>
            </div>

            <div className="info-skills info-section">
              <h6>skills /</h6>
              <p>branding - webdesign - web dévoppement - typographie - DA - print</p>
            </div>


            <div className="info-client info-section">
              <h6>client /</h6>
              <p>esmepim.</p>
            </div>

            <div className="info-link info-section">
              <a href="https://www.cdltbisou.com">voir le site</a>
            </div>

          </div>
        </div>

        <div className="project main-container" id="project">


          <div className="project-header">

            <div className="project-title">
              <ul className="no-bullet project-meta">
                {frontmatter.skills.split(',').map( cat => <li key={cat}>{cat}</li> )}
              </ul>
              <h1 className="project-name">le slingshot</h1>
              <p className="project-date">{frontmatter.date}</p>
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
      </React.Fragment>
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
        skills
        tools
        description
        featured
      }
    }
  }
`


