import React from "react"
import styled from "@emotion/styled"
// import FlickrHero from 'react-flickr-hero'
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

import BackgroundSection from "../components/background"

const Link = styled.div`
  visibility: hidden;
  display: block;
  height: 0;
`

const Page = styled.div`
  // width: 100vw;
  height: 100vh;
  margin: 0;
  padding 0;
  borders 0;
  background-color: black;
  color: white;
  position: relative;
  overflow: hidden;
`

const SubPage = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
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

const StyledBack = styled(BackgroundSection)`

`
const IndexPage = () => (

  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>

      {/*<FlickrHero*/}
      {/*  api_key="14d1ab3911a3b3ea1873d7b6c9269d08"*/}
      {/*  // user_id="132343752@N06"*/}
      {/*  // album_id="72157694825254121"*/}
      {/*  searchTerm='niagara'*/}
      {/*  limit={3}*/}
      {/*  fillPage*/}
      {/*/>*/}
      <StyledBack>
        <SubPage>
          <Header />
          <LandingBio />
        </SubPage>
      </StyledBack>
    </Page>

    {/*<Link id="about-me"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>ABOUT ME</Heading>*/}
    {/*  <AboutMe />*/}
    {/*</Section>*/}

    {/*<Link id="skills"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>SKILLS</Heading>*/}
    {/*  <Skills />*/}
    {/*</Section>*/}

    {/*<Link id="education"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>EDUCATION</Heading>*/}
    {/*  <Education />*/}
    {/*</Section>*/}

    {/*<Link id="experience"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>EXPERIENCE</Heading>*/}
    {/*  <Experience />*/}
    {/*</Section>*/}

    {/*<Link id="volunteer"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>LEADERSHIP</Heading>*/}
    {/*  <Leadership />*/}
    {/*</Section>*/}

    {/*<Link id="awards"></Link>*/}
    {/*<Section>*/}
    {/*  <Heading>AWARDS</Heading>*/}
    {/*  <Awards />*/}
    {/*</Section>*/}

  </Layout>
)

export default IndexPage
