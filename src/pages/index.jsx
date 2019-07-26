// external stuff
import React from "react"
import { Link, graphql } from "gatsby";

// components
import SEO from "../components/seo";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

// assets & helpers
import Cdltbisou from "../images/cdltbisou.svg";
import Etcaetera from "../images/tagline.svg";

// style
import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <div id="home-content">
      <SEO id="homepage" title="Home" keywords={data.site.siteMetadata.seo} />
      <Sidebar />
      <Navbar />

      <div id="brand-title">
        <Cdltbisou />
        <Etcaetera />
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
