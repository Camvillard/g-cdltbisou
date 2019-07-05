// external stuff
import React from "react"
import { Link, graphql } from "gatsby";

// components
import SEO from "../components/seo";
import Navbar from "../components/navbar";

// assets & helpers

// style
import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <div id="home-content">
      <SEO id="homepage" title="Home" keywords={data.site.siteMetadata.seo} />
      <Navbar />

      <div id="brand-title">
        <h1><span className="cdlt">cdlt</span><span className="bisou">bisou</span></h1>
        <h3>web + créa <span className="accent-title"> + et caetera</span></h3>
      </div>

      <div id="brand-infos">
        <h5>soon.</h5>
        <h5 className="accent-title">en attendant, soyez polis.</h5>
      </div>

    </div>
  )
}


export const query = graphql`
query homePage {
  site {
    siteMetadata {
      title
      seo
    }
  }
}
`


export default IndexPage;
