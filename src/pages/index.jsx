import React from "react";
import { Link, graphql } from "gatsby";

import Header from "../components/header";
// import Image from "../components/Image";
import SEO from "../components/seo";

import '../styles/main.scss';

const IndexPage = ({data}) => {
  return (
    <div>
      <SEO id="homepage" title="Home" keywords={data.site.siteMetadata.seo} />
      <Header siteTitle={data.site.siteMetadata.title} path="homepage" />
      <Link to="/contact">contact</Link>
      <h1>todo prout</h1>
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


export default IndexPage
