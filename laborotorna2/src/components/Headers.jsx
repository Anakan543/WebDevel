import React from "react";
import { Login } from "./login";
import { Logout } from "./logout";
export class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  LoginClick() {
    this.setState({ isLoggedIn: true });
  }

  LogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let elementMenu;
    if (isLoggedIn) {
      elementMenu = <Logout onClick={this.LogoutClick} />;
    } else {
      elementMenu = <Login onClick={this.LoginClick} />;
    }
    return (
      <>
        <header class="container">
          <nav>
            <ul>
              {elementMenu}
              <li class="active">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Portfolio</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}
