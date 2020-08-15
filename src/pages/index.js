import React from "react"
import styled from "@emotion/styled"

import LandingBio from "../components/landing-bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/header"
import AboutMe from "../components/about/aboutme"
import Education from "../components/about/education"
import Experience from "../components/about/experience"
import Leadership from "../components/about/leadership"
import Awards from "../components/about/awards"
import Skills from "../components/about/skills"

const Link = styled.div`
  visibility: hidden;
  display: block;
  height: 0;
`

const Page = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding 0;
  borders 0;
`

const Heading = styled.div`
  margin-bottom: 3rem;
  margin-top: 1rem;
  font-size: 1.7rem;
  text-align: center;
`

const Section = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
`

// const Image = styled.div`
//   background: url(demhacked.png) no-repeat center center fixed;
//   -webkit-background-size: cover;
//   -moz-background-size: cover;
//   -o-background-size: cover;
//   background-size: cover;
// `
const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>
      <Header />
      <LandingBio />
    </Page>

    <Link id="about-me"></Link>
    <Section>
      <Heading>ABOUT ME</Heading>
      <AboutMe />
    </Section>

    <Link id="skills"></Link>
    <Section>
      <Heading>SKILLS</Heading>
      <Skills />
    </Section>

    <Link id="education"></Link>
    <Section>
      <Heading>EDUCATION</Heading>
      <Education />
    </Section>

    <Link id="experience"></Link>
    <Section>
      <Heading>EXPERIENCE</Heading>
      <Experience />
    </Section>

    <Link id="volunteer"></Link>
    <Section>
      <Heading>LEADERSHIP</Heading>
      <Leadership />
    </Section>

    <Link id="awards"></Link>
    <Section>
      <Heading>AWARDS</Heading>
      <Awards />
    </Section>

  </Layout>
)

export default IndexPage
