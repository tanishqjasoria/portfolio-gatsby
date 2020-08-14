import React from "react"
import styled from "@emotion/styled"


const Container = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  padding-left: 4rem;
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;


// const IntroColumn1 = styled.div`
//   width: 50%;
//   // display: flex;
// `
//
// const IntroColumn2 = styled.div`
//   width: 50%;
//   display: flex;
//   justify-content: flex-end;
// `

const Description = styled.p`
  // padding-left: 1vh;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const AboutMe = () => (
  <Container>
    <Description>About Me</Description>
    <Break />
  </Container>
)

export default AboutMe

