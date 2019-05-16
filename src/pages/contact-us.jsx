// external libs
import React from "react"
import { Link } from "gatsby"

// components
import SEO from "../components/seo"

// internal data

// styles
import "../styles/main.scss"


const Contact = () => (
  <div id="contact-page">
    <SEO title="contact" id="contact" />

    <div id="contact-back">
      <Link to="/">
        <span className="link-text">retour</span>
        <svg id="arrow-stroke-contact" viewBox="0 0 136 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 35L40.3046 1L46.243 8.96602L22.0525 29.8917L135 29.8917V40.1083H22.0525L46.243 61.034L40.3046 69L1 35Z"/>
        </svg>
      </Link>
    </div>

    <div id="contact-content">

      <div id="contact-header">

        <h1>contact</h1>
        <h6>je réponds en général assez vite. parfois un peu moins. mais quand même, toujours en moins de 48h.</h6>

      </div>

      <div id="contact-form">
        <form
          action="/merci"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field">

          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />

          <label htmlFor="emailAddress">adresse mail :
            <input name="emailAdress" type="email"/>
          </label>

          <label htmlFor="fullName">nom & prénom :
            <input name="fullName" type="text"/>
          </label>

          <label htmlFor="message">message :
            <textarea name="message"/>
          </label>

          <button type="submit">envoyer</button>


        </form>

      </div>

    </div>

  </div>
)

export default Contact;

