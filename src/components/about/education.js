import React from "react"
import styled from "@emotion/styled"

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
  <Container>
    <Heading>Indian Institue of Technology Kharagpur</Heading>
    <SubHeading>
      <Position>
        Integrated Master of Science (MSc), Mathematics and Computing | CGPA –
        7.34
      </Position>
      <Date>2016-2021</Date>
    </SubHeading>
  </Container>
)

export default Education
