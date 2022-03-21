import React, { useEffect } from "react";
import "./style.css";

import Icon from "../fonticon/Icon";

export default function Nav(props) {
    useEffect(() => {
        const BtnAdd = document.getElementById("BtnAdd");
        BtnAdd.addEventListener("click", () => {
            if (props.showmodal === true) {
                props.setshowmodal(false);
                BtnAdd.classList.remove("active");
                return;
            }

            BtnAdd.classList.add("active");
            props.setshowmodal(true);
        });
    }, [props]);

    return (
        <nav>
            <ul>
                <li>
                    <Icon icon="fa-solid fa-border-all"></Icon>
                </li>

                <li id="BtnAdd">
                    <Icon icon="fa-solid fa-plus"></Icon>
                </li>

                <li>
                    <Icon icon="fa-solid fa-arrow-right-from-bracket"></Icon>
                </li>
            </ul>
        </nav>
    );
}
