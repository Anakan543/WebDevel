
import React, { useState } from "react";

import Modal from "./Modal.jsx";

export const   ModalLogic = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button className="userCheck"  onClick={() => setIsOpen(true)}>
        Login
      </button>
      {isOpen && <Modal isOpen={setIsOpen} />}
    </div>
  );
};
