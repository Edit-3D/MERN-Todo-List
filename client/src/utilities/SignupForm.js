import React from "react";
import { Button, FormGroup, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/Form.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newUname: "",
      newPword: "",
      newEmail: "",
      newName: "",
    };
  }
  handleSignupInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { newUname, newPword, newEmail, newName } = this.state;
    return (
      <div class="login-form">
        <div class="title-container">
          <h2 class="title-text">Create an Account!</h2>
        </div>
        <Form className="custom-form">
          <FormGroup>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="custom-input"
              name="newName"
              type="text"
              placeholder="Enter your name"
              value={newName}
              onChange={this.handleSignupInputChange}
            ></Form.Control>
          </FormGroup>
          <FormGroup>
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              className="custom-input"
              name="newEmail"
              type="text"
              placeholder="Enter your email"
              value={newEmail}
              onChange={this.handleSignupInputChange}
            ></Form.Control>
          </FormGroup>
          <FormGroup>
            <Form.Label>Username</Form.Label>
            <Form.Control
              className="custom-input"
              type="text"
              placeholder="Enter a Username"
              value={newUname}
              onChange={this.handleSignupInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="custom-input"
              type="password"
              placeholder="Enter a Password"
              value={newPword}
              onChange={this.handleSignupInputChange}
            />
          </FormGroup>
          <div className="link-container">
            Already have an account?
            <Button
              className="custom-signup-button"
              variant="link"
              onClick={this.props.onSwitchToLogin} // Call the passed function to switch tabs
            >
              Login!
            </Button>
          </div>
          <div class="button-container">
            {" "}
            <Button className="custom-button" variant="primary" type="submit">
              Create
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default SignupForm;
