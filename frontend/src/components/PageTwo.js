import React from 'react';
import ReactDOM from 'react-dom';
import SampleDataFetch from './SampleDataFetch';
import SampleTable from './SampleTable';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './SampleCss.css';

const PageTwo = () => (
  <Container>
    <Jumbotron className="jumbotron-custom">
      <SampleDataFetch endpoint="api/contactus/"
        render={data => <SampleTable data={data} />}
      />
    </Jumbotron>
  </Container>
);

export default PageTwo;
