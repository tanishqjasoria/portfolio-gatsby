import React from "react"
import styled from "@emotion/styled"

const Container = styled.div`
  padding-bottom: 0rem;
  padding-left: 4rem;
  padding-right: 4rem;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
  margin-botton: 1rem;
`

const Description = styled.div`
  margin-bottom: 0.2rem;
  font-size: 1.5rem;
  // text-align: center;
`

const Break = ({ breakTitle }) => (
  <Container>
    <Description>{breakTitle}</Description>
    <Line></Line>
  </Container>
)

export default Break
