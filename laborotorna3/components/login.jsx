import { useState } from "react";
import React from "react";
export class Login extends React.Component{
  

  render(){
        return (
          <>
            <li onClick={this.props.onClick} class="userCheck ">
              <a class="checkboxA" href="#">
                Login
              </a>
            </li>
          </>
        );
    }
}