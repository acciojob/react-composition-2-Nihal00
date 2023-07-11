import React from "react";

const Modal = ({ onClose, setOnClose }) => {
  return (
    <div onClick={() => setOnClose(false)}>
      {(onClose) ? <div>
        <button onClick={() => setOnClose(false)}>close</button>
        <p>This is the content of the modal</p>
      </div> : ""}
    </div>
  );
};

export default Modal;