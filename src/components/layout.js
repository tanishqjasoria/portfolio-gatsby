/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"

import "./layout.css"

const Content = styled.div`
  margin: 0;
  // max-width: 860px;
  padding: 0;
`

const GatsbyLink = styled.a`
  margin-left: 5px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        resume {
          basics {
            name
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Helmet>
          <link rel="icon" href={favicon} />
        </Helmet>
        <Content>
          <main>{children}</main>
          {/*<Footer>*/}
          {/*  <p>*/}
          {/*    © {new Date().getFullYear()}, Built with*/}
          {/*    {` `}*/}
          {/*  </p>*/}
          {/*  <GatsbyLink href="https://www.gatsbyjs.org">Gatsby</GatsbyLink>*/}
          {/*</Footer>*/}
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
