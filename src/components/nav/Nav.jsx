import React, { useEffect } from "react";
import "./style.css";

import Icon from "../fonticon/Icon";

export default function Nav(props) {
    useEffect(() => {
        const Pages = document.getElementsByClassName("pagination");
        const currentPage = document.getElementById(props.CurrentPage);

        for (let i = 0; i < Pages.length; i++) {
            if (Pages[i].classList.contains("active"))
                Pages[i].classList.remove("active");

            Pages[i].addEventListener("click", (e) => {
                props.SetCurrentPage(e.target.classList[0]);
            });
        }

        currentPage.classList.add("active");
    }, [props]);

    return (
        <nav>
            <ul>
                <li className="dashboard pagination" id="dashboard">
                    <Icon icon="dashboard fa-solid fa-border-all"></Icon>
                </li>

                <li className="add pagination" id="add">
                    <Icon icon="add fa-solid fa-plus"></Icon>
                </li>

                <li className="logout pagination" id="logout">
                    <Icon icon="logout fa-solid fa-arrow-right-from-bracket"></Icon>
                </li>
            </ul>
        </nav>
    );
}
