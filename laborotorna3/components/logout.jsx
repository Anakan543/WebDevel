import React from "react";

export class Logout extends React.Component {
  render() {
    return (
      <li onClick={this.props.onClick} class="userCheck ">
        <a class="checkboxA" href="#">
          Logout
        </a>
      </li>
    );
  }
}
