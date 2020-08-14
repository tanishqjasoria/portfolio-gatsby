import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Name from "../components/about/name.js"
import AboutMe from "../components/about/aboutme"
const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Name />
    <AboutMe/>
  </Layout>
)

export default AboutPage