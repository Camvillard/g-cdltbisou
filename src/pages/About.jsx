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

const AboutPage = () => (
  <Layout>
    <SEO title="About" id="about" />
    <h1>Hi from the about page</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/contact">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
