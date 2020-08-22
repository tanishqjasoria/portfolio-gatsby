import React from "react"
import styled from "@emotion/styled"
import { graphql, StaticQuery } from "gatsby"

const Container = styled.div`
  padding-bottom: 1.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const Heading = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 0.15rem;
`

const SubHeading = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 0.5rem;
`

const Position = styled.h1`
  font-size: 1.2rem;
  width: 70%;
  display: flex;
  font-style: bold;
`

const Date = styled.div`
  width: 30%;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  font: bold;
`

const Description = styled.div`
  // padding-left: 1vh;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
`

const Areas = styled.h1`
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: justify;
  text-justify: inter-word;
  font-style: italic;
`

const Experience = () => (
  <StaticQuery
    query={graphql`
      query ExperienceQuery {
        resume {
          work {
            website
            company
            pinned
            location
            position
            startDate
            endDate
            areas
            highlights
          }
        }
      }
    `}
    render={(data) => <Container></Container>}
  />
)

export default Experience
