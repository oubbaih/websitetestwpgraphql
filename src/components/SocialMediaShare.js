import React from "react"
import styled from "styled-components"
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
} from "react-share"
import { FaShareAltSquare } from "react-icons/fa"
const SocialMediaShare = ({ url, title, size }) => {
  return (
    <Items>
      <Special color="#fff">
        <FaShareAltSquare /> <span>share</span>
      </Special>
      <List color="#3B5998">
        <FacebookShareButton url={url} quote={title}>
          <Wrap>
            <FacebookIcon size={size} /> <Name> facebook</Name>
          </Wrap>
        </FacebookShareButton>
      </List>
      <List color="#007FB1">
        <LinkedinShareButton url={url} quote={title}>
          <Wrap>
            <LinkedinIcon size={size} /> <Name> linkedin</Name>
          </Wrap>
        </LinkedinShareButton>
      </List>
      <List color="#CB2128">
        <PinterestShareButton url={url} quote={title}>
          <Wrap>
            {" "}
            <PinterestIcon size={size} />
            <Name> pinterest</Name>
          </Wrap>
        </PinterestShareButton>
      </List>
      <List color="#24B8F0">
        <TwitterShareButton url={url} quote={title}>
          <Wrap>
            {" "}
            <TwitterIcon size={size} /> <Name>twitter</Name>
          </Wrap>
        </TwitterShareButton>
      </List>
    </Items>
  )
}

export default SocialMediaShare

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${props => props.theme.colors.secondary};
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  padding: 3rem;
  flex-wrap: wrap;
`
const Special = styled.li`
  width: 10rem;
  padding: 1rem;
  background-color: ${props => props.color};
  color: ${props => props.theme.colors.secondary} !important;
  border: 1px solid ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    text-transform: capitalize;
    font-size: 1.2rem;
    flex-basis: 50%;
  }
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: -0.56rem;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.color};
    transform: rotate(45deg);
    border-top: 1px solid ${props => props.theme.colors.secondary};
    border-right: 1px solid ${props => props.theme.colors.secondary};
  }
`

const List = styled.li`
  width: 10rem;
  display: inline-block;
  padding: 1rem;
  background-color: ${props => props.color};
`
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`
const Name = styled.span`
  text-transform: capitalize;
  color: ${props => props.theme.colors.thirth};
  font-size: 1.2rem;
  flex-basis: 50%;
`
