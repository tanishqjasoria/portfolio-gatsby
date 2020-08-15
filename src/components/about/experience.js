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
  <Container>
    <Heading>
      <a href="https://ssl.engineering.nyu.edu/" target="_black">
        Secure Systems Lab, New York University
      </a>
    </Heading>
    <SubHeading>
      <Position>Associate Research Scientist</Position>
      <Date>May 2019 - July 2019</Date>
    </SubHeading>
    <Description>
      Performed vulnerability assessment of Uptane by carrying out various
      cyber-attacks in a simulated environment Prevented rollback and hardware
      mismatch attacks on Uptane, in case of a compromised software repository
      Encrypted the updates, delivered using Uptane, by implementing hybrid
      end-to-end encryption (RSA2048 + AES128) Added the support to externally
      sign a repository metadata in TUF using hardware security tokens
      (PIV/CCID)
    </Description>
    <Areas>
      Areas: Python, Secure Software Development, Encryption, Public Key
      Infrastructure, Systems Security
    </Areas>
  </Container>
)

export default Experience
