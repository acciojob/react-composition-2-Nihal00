import React from "react";
import "./Model.css";

const Modal = ({ onClose, setOnClose }) => {

    return(
        <div className = {onClose ? style.btn_active : style.btn_inactive}>
            <button onClick={() => setOnClose(false)}  >close</button>
            <p>This is the content of the modal</p>
        </div>
    )
}