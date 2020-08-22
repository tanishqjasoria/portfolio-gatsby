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

const Awards = () => (
  <StaticQuery
    query={graphql`
      query AwardsQuery {
        resume {
          awards {
            title
            date
            awarder
            summary
          }
        }
      }
    `}
    render={(data) => <Container></Container>}
  />
)

export default Awards
