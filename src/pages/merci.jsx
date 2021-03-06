import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"

// styles
import "../styles/main.scss"

const Merci = () => (
  <div>
    <div id="merci-content">
      <SEO title="Merci" id="merci" />

      <div id="merci-header">
        <h2>merci pour<br />votre message,</h2>
        <h6>vous aurez une réponse sous peu, promis.</h6>
      </div>

      <div id="merci-more">
        <p className="accent-text">si toutefois d'ici là vous cherchez une occupation, <a href="https://drive.google.com/file/d/1isU3OCUqgx3CQlfwsgonA6-K6At9l1MT/view?usp=sharing" target="_blank" rel="noopener noreferrer">voici la recette des meilleurs scones du monde.</a> faites-en bon usage.</p>
      </div>
    </div>

    <div id="merci-back">
      <Link to="/" className="btn-back-home">
        <span className="link-text">retour</span>
        <svg id="arrow-stroke-merci" viewBox="0 0 136 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 35L40.3046 1L46.243 8.96602L22.0525 29.8917L135 29.8917V40.1083H22.0525L46.243 61.034L40.3046 69L1 35Z"/>
        </svg>
      </Link>
    </div>
  </div>
)

export default Merci;




