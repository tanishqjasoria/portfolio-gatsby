import React from "react"
import styled from "@emotion/styled"
import { SOCIAL_LINKS } from "../constants"

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
`

const IntroColumn1 = styled.div`
  width: 50%;
  // display: flex;
`

const IntroColumn2 = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
`

const Description = styled.p`
  // padding-left: 1vh;
  margin-bottom: 1rem;
  font-size: 1rem;
`

const NameHeader = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0;
`
// const SocialLinks = styled.div`
//   margin-top: 20px;
// `

const IconCont = styled.a`
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
    color: #fff;
    border-radius: 2px;
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

const Name = () => (
  <Container>
    <IntroColumn1>
      <NameHeader>Tanishq Jasoria</NameHeader>
      <Description>Senior Undergraduate, Department of Mathematics</Description>
    </IntroColumn1>
    <IntroColumn2>
      {SOCIAL_LINKS.map(({ url, text, Icon }) => (
        <IconCont data-title={text} href={url} target="_blank">
          <Icon size={32} />
        </IconCont>
      ))}
    </IntroColumn2>
  </Container>
)

export default Name
