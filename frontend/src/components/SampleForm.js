import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import './SampleCss.css';

// withRouter is needed to push to a different page when the form is submitted

// The following is the first pages styled button. The rest is from the imported
// CSS file.
const Button = styled.button`
  background-image: linear-gradient(90deg, SeaGreen, DeepSkyBlue);
  color: white;
  width: 200px;
  height: 150px;
  font-size: 24px;
  border: 7px solid DarkTurquoise;
  border-radius: 100px;
`;

class SampleForm extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    email: "",
    message: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const contactus = { name, email, message };
    const conf = {
      method: "post",
      body: JSON.stringify(contactus),
      headers: new Headers({ "Content-Type": "application/json" })
    };
    fetch(this.props.endpoint, conf).then(response => console.log(response));
    this.props.history.push('/pagetwo'); // moves to pagetwo when submitted
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <Jumbotron className="jumbotron-custom">
        <h3>To contact us, fill out and submit the form below.</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={this.handleChange}
                value={name}
                required
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={this.handleChange}
                value={email}
                required
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
              <Form.Control
                type="text"
                name="message"
                onChange={this.handleChange}
                value={message}
                as="textarea"
                rows="5"
                required
              />
          </Form.Group>
      <br />
      <hr color="white" weight="2px" />
        <Row className="show grid text-center">
          <Container className="container-custom">
            <Button type="submit">
              Submit Message
            </Button>
          </Container>
        </Row>
        </Form>
      </Jumbotron>
    );
  }
}
export default withRouter(SampleForm);
