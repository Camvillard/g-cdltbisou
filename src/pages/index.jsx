import React from "react";
import { Link, graphql } from "gatsby";

import Header from "../components/header";
// import Image from "../components/Image";
import SEO from "../components/seo";

import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <div id="home-content">
      <SEO id="homepage" title="Home" keywords={data.site.siteMetadata.seo} />
      <div id="header-contact">
        <Link to="/contact">contact</Link>
      </div>
      <h1>cdltbisou</h1>
      <div id="brand-title">
        <h3>web + créa <span class="accent-title"> + et caetera</span></h3>
      </div>
      <div id="brand-infos">
        <h5>soon.</h5>
        <h5 class="accent-title">en attendant, soyez polis.</h5>
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
