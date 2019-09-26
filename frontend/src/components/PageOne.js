import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import SampleForm from './SampleForm';

const PageOne = () => (
  <Container>
    <SampleForm endpoint="api/contactus/" />
  </Container>
);

export default PageOne;
