import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Name from "../components/about/name.js"
import AboutMe from "../components/about/aboutme"
import Break from "../components/about/break"
import Education from "../components/about/education"
import Experience from "../components/about/experience"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Name />
    <Break breakTitle="ABOUT ME" />
    <AboutMe />
    <Break breakTitle="EDUCATION" />
    <Education />
    <Break breakTitle="WORK EXPERIENCE" />
    <Experience />
  </Layout>
)

export default AboutPage
