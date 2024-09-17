import React from "react";

const Modal = ({ isOpen }) => {
  return (
    <>
      <div onClick={() => isOpen(false)} />
      <div className="ModalDiv">
        <div>
          <form className="Modal">
            <label htmlFor="login">Username</label>
            <input type="text" name = "login"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" />
          </form>
          <div>
            <div>
              <button 
              onClick={() => isOpen(false)}>
                Login
              </button>
              <button
                onClick={() => isOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;