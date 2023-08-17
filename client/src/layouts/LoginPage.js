import React from "react";
import { Tab, Tabs } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/LoginPage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import LoginForm from "../utilities/LoginForm";
import SignupForm from "../utilities/SignupForm";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "login", // Set the initial active tab
    };
  }

  handleTabChange = (tabKey) => {
    this.setState({ activeTab: tabKey });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div className="app">
        <div className="form-container">
          <Tabs activeKey={activeTab} onSelect={this.handleTabChange} justify>
            <Tab eventKey="login" title="Login">
              <LoginForm
                onSwitchToSignup={() => this.handleTabChange("signup")}
              />
            </Tab>
            <Tab eventKey="signup" title="Signup">
              <SignupForm
                onSwitchToLogin={() => this.handleTabChange("login")}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LoginPage;
