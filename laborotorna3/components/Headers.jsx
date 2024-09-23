import React from "react";
import { Login } from "./login";
import { Logout } from "./logout";
import { ModalLogic } from "./modalLogic";
export class Headers extends React.Component {
  constructor(props) {
    super(props);
    this.LoginClick = this.LoginClick.bind(this);
    this.LogoutClick = this.LogoutClick.bind(this);
    this.state = { isLoggedIn: false, 
                  isOpen: false
     };
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
              <li class="active">
                <a href="#">Головна сторінка</a>
              </li>
              <li >
                <a href="#">Каталог</a>
              </li>
              <li >
                <a href="#">Допомога</a>
              </li >
              <li>
                <a href="#">Форум</a>
              </li>
              <li>
                <a href="#">Контакти</a>
              </li>
            </ul>
          </nav>
          <ModalLogic></ModalLogic>
        </header>
      </>
    );
  }
}
