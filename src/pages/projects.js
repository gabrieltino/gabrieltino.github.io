import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <SEO title="Projects | Miracle Gabriel(sixpathdev)" />
    <div className="container">
      <div className="portfolio-area">
        <h2 className="heading-main">iBuild</h2>
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
                href="http://citycore.com.ng/app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                citycore.com.ng/app
              </a>
            </h2>
            <p className="tech">
              <em>
                {" "}
                <span>Tech Used: </span> HTML/CSS, Bootstrap, PHP
              </em>
            </p>

            <p className="description">
              City Core is a finance institution that give soft loans to civil
              servants in the quickest possible time{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    ..
  </Layout>
)
