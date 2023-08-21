/* import React from "react";
import { Button, FormGroup, Form } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/Form.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputUname: "",
      inputPword: "",
    };
  }

  handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    const { inputUname, inputPword } = this.state;
    return (
      <div class="login-form">
        <div class="title-container">
          <h2 class="title-text">Login to your Account!</h2>
        </div>
        <Form className="custom-form">
          <FormGroup>
            <Form.Label>Username or Email</Form.Label>
            <Form.Control
              className="custom-input"
              name="inputUname"
              type="text"
              placeholder="Enter your Username or Email"
              value={inputUname}
              onChange={this.handleLoginInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="custom-input"
              name="inputPword"
              type="password"
              placeholder="Enter your Password"
              value={inputPword}
              onChange={this.handleLoginInputChange}
            />
          </FormGroup>
          <div className="link-container">
            Don't have an Account?
            <Button
              className="custom-signup-button"
              variant="link"
              onClick={this.props.onSwitchToSignup}
            >
              Signup!
            </Button>
          </div>
          <div class="button-container">
            {" "}
            <Button className="custom-button" variant="primary" type="submit">
              Login
            </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
 */
