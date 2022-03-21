import React from "react";
import "./style.css";

import Modal from "../modal/Modal";

export default function Main(props) {
    return (
        <main>
            <Modal {...props}/>
        </main>
    );
}
