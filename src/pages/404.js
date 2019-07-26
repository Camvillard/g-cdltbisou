// external stuff
import React from "react"
import { Link, graphql } from "gatsby";

// components
import Layout from "../components/layout"
import SEO from "../components/seo";
import Navbar from "../components/navbar";

// assets & helpers

// style
import '../styles/main.scss';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
