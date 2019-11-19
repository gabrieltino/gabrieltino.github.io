import React from "react"

import SEO from "../components/seo"
import Layout from '../components/layout'

export default () => (
  <Layout>
    <SEO title="Contact | Miracle Gabriel (sixpathdev)" />

    <div className="container">
      <div className="contact">
        <h1 className="heading-main">Get in Touch!</h1>

        <p>
          {" "}
          Say{" "}
          <a
            className="mail"
            href="mailto:miracle8093@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hi
          </a>{" "}
          or find me on other social media platforms:{" "}
          <a
            href="https://www.linkedin.com/in/sixpathdev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://twitter.com/sixpathdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          ,{" "}
          <a
            href="https://github.com/sixpathdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          ,{" "}
          <a
            href="https://facebook.com/sixpathdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          .
        </p>
      </div>
    </div>
  </Layout>
)
