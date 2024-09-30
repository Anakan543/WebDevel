import React, {useState} from "react";
import { ModalLogic } from "./modal/modalLogic";

export const Headers = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <header className="container">
          <nav>
            <ul>
              <li className="active">
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
