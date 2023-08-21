/* import React from "react";
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
      activeTab: "login",
      newUser: null,
    };
  }

  handleTabChange = (tabKey) => {
    this.setState({ activeTab: tabKey });
  };

  handleUserCreated = (newUser) => {
    this.setState({ newUser });
  };

  render() {
    const { activeTab, newUser } = this.state;

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
                newUser={newUser}
                onUserCreated={this.handleUserCreated}
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default LoginPage;
 */
