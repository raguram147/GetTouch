import React from "react";
import styled from "styled-components";
import {} from "./CSS/Footer.css";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
const sampleData = [
  {
    name: "Facebook",
    url: "#",
    icons: "https://img.icons8.com/material-rounded/48/ffffff/facebook.png",
  },
  {
    name: "LinkedIn",
    url: "#",
    icons: "https://img.icons8.com/material-rounded/48/ffffff/linkedin--v1.png",
  },
  {
    name: "Instagram",
    url: "#",
    icons:
      "https://img.icons8.com/material-rounded/48/ffffff/instagram-new.png",
  },
];
const AcheivementsData=[
    {
        name: "slide name",
        acheived:"New ML invented",
        team: "POD-M"
    },
    {
        name: "slide name",
        acheived:"New ML invented",
        team: "POD-M"
    },
    {
        name: "slide name",
        acheived:"New ML invented",
        team: "POD-M"
    },
    {
        name: "slide name",
        acheived:"New ML invented",
        team: "POD-M"
    },
]

export default function Footer() {
  return (
    <Container className="footer">
      <Left>
        <Carousel fade className="carousel">
            {AcheivementsData.map((data)=>(<Carousel.Item interval={1000} className="carouselitem"><Carousel.Caption><h3>{data.name}</h3><p>{data.acheived}</p><h3>{data.team}</h3></Carousel.Caption></Carousel.Item>))}
        </Carousel>
      </Left>
      <Right>
        <h2>Connect with us </h2>
        <h2>1.800.701.3082</h2>
        <h2>Follow us on</h2>
        <div id="social-media">
          {sampleData.map((data) => (
            <a href={data.url}>
              <img
                className="social-media-logo"
                src={data.icons}
                title={data.name}
              ></img>
            </a>
          ))}
        </div>
      </Right>
    </Container>
  );
}
const Container = styled.div`
h2{
    &:nth-of-type(1) {
        font-weight:900px;
      }
  }`;
const Left = styled.div`
  width: 70%;

`;
const Right = styled.div`
width:30%;

`;
