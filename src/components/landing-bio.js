import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { SOCIAL_LINKS } from "./constants"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 83vh;
`

const Description = styled.p`
  padding: 2vh;
  margin-bottom: 1rem;
  font-size: 1.4rem;
`

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
`
const SocialLinks = styled.div`
  margin-top: 20px;
`

const IconCont = styled.a`
  color: white;
  margin: 10px;
  text-decoration: none;
  position: relative;
  display: inline-block;
  height: 30px;
  width: 35px;
  transition: all ease-in-out 0.2s;

  :hover::before {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    white-space: nowrap;
  }
  ::before {
    content: attr(data-title);
    display: inline-block;
    position: absolute;
    bottom: -38px;
    left: -6px;
    margin: 0 auto;
    font-size: 13px;
    padding: 3px 10px;
    background: #222;
    color: white;
    border-radius: 1px;
    height: 28px;
    line-height: 22px;
    opacity: 0;
    transition: opacity 150ms linear, transform 150ms linear,
      -webkit-transform 150ms linear;
    transform: translate3d(0, -8px, 0);
    z-index: 99;
  }
  ::after {
    content: "";
    position: absolute;
    top: 35px;
    left: 13px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #222;
    opacity: 0;
    transition: opacity 150ms linear, transform 150ms linear,
      -webkit-transform 150ms linear;
    transform: translate3d(0, -8px, 0);
    z-index: 100;
  }
  :hover::after {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  // .social-links > .icon {
  //   transition: all ease-in-out 0.2s;
  // }
  //
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={(data) => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <SocialLinks>
            {SOCIAL_LINKS.map(({ url, text, Icon }) => (
              <IconCont data-title={text} href={url} target="_blank">
                <Icon size={32} />
              </IconCont>
            ))}
          </SocialLinks>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
