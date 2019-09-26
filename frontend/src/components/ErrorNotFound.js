import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import styled from 'styled-components';
import './SampleCss.css';

const TitleHOne = styled.h1`
  font-size: 4em;
  font-family: "Courier New", Courier, monospace;
  text-align: center;
  color: LightCyan;
`;
const TitleHTwo = styled.h2`
  font-size: 3em;
  font-family: "Calluna Sans", Palatino, Arial;
  text-align: center;
  color: LightCyan;
`;

export default class ErrorNotFound extends Component {
  render() {
    return (
        <Container>
          <Jumbotron className="jumbotron-error">
            <TitleHOne>404 ERROR</TitleHOne>
            <TitleHOne>HOW DID YOU GET HERE!</TitleHOne>
            <TitleHOne>Let's find out.</TitleHOne>
            <TitleHTwo>
              This is not the page you are looking for. Please try a link from
              the navigation bar, or check the url ending.
            </TitleHTwo>
          </Jumbotron>
        </Container>
    );
  }
}
