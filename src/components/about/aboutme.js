import React from "react"
import styled from "@emotion/styled"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
  padding-bottom: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

// const IntroColumn1 = styled.div`
//   width: 50%;
//   // display: flex;
// `
//
// const IntroColumn2 = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;
//

const Description = styled.div`
  // padding-left: 1vh;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
`

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query ResumeQuery {
        resume {
          basics {
            summary
          }
        }
      }
    `}
    render={(data) => (
      <Container>
        <Description>
          {data.resume.basics.summary}
        </Description>
      </Container>
    )}
  />
)

export default AboutMe
