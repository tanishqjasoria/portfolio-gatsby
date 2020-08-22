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
`

const Position = styled.div`
  width: 70%;
  display: flex;
`

const Date = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`

// const Description = styled.div`
//   // padding-left: 1vh;
//   margin-bottom: 1rem;
//   font-size: 1rem;
//   text-align: justify;
//   text-justify: inter-word;
// `

const Education = () => (
  <StaticQuery
    query={graphql`
      query EducationQuery {
        resume {
          education {
            endDate
            startDate
            area
            studyType
            institution
          }
        }
      }
    `}
    render={(data) => <Container></Container>}
  />
)

export default Education
