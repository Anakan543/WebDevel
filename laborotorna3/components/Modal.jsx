import React from "react";

const Modal = ({ isOpen }) => {
  return (
    <>
      <div className="BackgroundClick" onClick={() => isOpen(false)} />
      <div className="ModalDiv">
        <div>
          <form className="Modal">
            <label htmlFor="login">Логін</label>
            <input type="text" name = "login"/>
            <label htmlFor="password">Пароль</label>
            <input type="password" name="password" id="" />
          </form>
          <div>
            <div className="buttonDiv">
              <button  
              onClick={() => isOpen(false)}>
               <a href="#">Увійти</a>
              </button>
              <button
                onClick={() => isOpen(false)}
              >
                <a href="#">Реєстрація</a>
              </button>
              <button
                onClick={() => isOpen(false)}
              >
                <a href="#">Назад</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;