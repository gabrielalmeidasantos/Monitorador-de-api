import React, { useEffect } from "react";
import "./style.css";

import Icon from "../fonticon/Icon";

export default function Modal(props) {
    useEffect(() => {
        const closeModal = document.getElementById("close-modal");
        closeModal.addEventListener("click", () => {
            
            props.setshowmodal(false);
        });
    }, [props]);

    const style = {
        display: props.showmodal ? 'flex' : 'none'
    };
    return (
        <div className="container-modal" style={style}>
            <div className="modal">
                <div className="modal-header">
                    <span>Adicionar API</span>
                    <span className="close-modal" id="close-modal">
                        <Icon icon="fa-solid fa-xmark" />
                    </span>
                </div>
                <div className="modal-main"></div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
}
