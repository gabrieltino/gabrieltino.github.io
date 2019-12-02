import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <SEO title="Projects | Miracle Gabriel(sixpathdev)" />
    <div className="container">
      <div className="portfolio-area">
        <h2 className="heading-main">iBuild</h2>
        <h3>Confidential projects are not listed here</h3>
        <div className="porfolio">
          <div className="portfolio-card">
            <h2>
              <a
                href="http://teachable.ng/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Teachable.ng
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> HTML/CSS, Javascript(Nodejs)
              </em>
            </p>

            <p className="description">
              Teachable helps scouts and parents find competent teachers to hire
              in the city of Port Harcourt. Still in development though.{" "}
            </p>
          </div>
          <div className="portfolio-card">
            <h2>
              <a
                href="http://spacextino.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Spacextino
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> React, Apollo, Node.js, Express,
                GraphQL, MongoDB
              </em>
            </p>

            <p className="description">
              Spacextino uses the SpaceX api to display list of launches and
              their attempt status. It also displays the rocket launch details.{" "}
            </p>
          </div>
          <div className="portfolio-card">
            <h2>
              <a
                href="https://https://todowithmern2.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Items Listing
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> React, Express, Node.js, Mongodb
              </em>
            </p>

            <p className="description">
              todowithmern2 is a shopping list app for creating lists.
              Authentication is needed in other to access.{" "}
            </p>
          </div>
          <div className="portfolio-card">
            <h2>
              <a
                href="https://citycore.com.ng/app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Citycore
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> Html/Css, Bootstrap, Php
              </em>
            </p>

            <p className="description">
              Integrated paystack api into the app for instant and recurring
              payments.{" "}
            </p>
          </div>

          <div className="portfolio-card">
            <h2>
              <a
                href="https://ceapoly-webtech.firebaseapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ceapoly School of science and tech
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> Html/Css, Bootstrap
              </em>
            </p>

            <p className="description">
              A web project in school to design a website for the school of
              science and technology.{" "}
            </p>
          </div>

          <div className="portfolio-card">
            <h2>
              <a
                href="https://scis-system.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Student Complaint Information System
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> Html/Css, Bootstrap, Javascript,
                Laravel, Blade, MySQL
              </em>
            </p>

            <p className="description">
              A software built for project defense in my National Diploma.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    ..
  </Layout>
)
