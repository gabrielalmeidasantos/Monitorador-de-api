import React, { useState } from "react";
import "./style.css";

import Nav from "../nav/Nav";
import Main from "../main/Main";

export default function Container() {
    const [CurrentPage, SetCurrentPage] = useState("dashboard");
    const [RefreshApi, SetRefreshApi] = useState(10);
    const [APIs, SetAPIs] = useState([]);

    setTimeout(() => {
        RefreshApi > 0 ? SetRefreshApi(RefreshApi - 1) : SetRefreshApi(10);
    }, 1000);

    return (
        <>
            <div className="container">
                <Nav
                    SetCurrentPage={SetCurrentPage}
                    CurrentPage={CurrentPage}
                />
                <Main
                    CurrentPage={CurrentPage}
                    RefreshApi={RefreshApi}
                    APIs={APIs}
                    SetCurrentPage={SetCurrentPage}
                    SetAPIs={SetAPIs}
                />
            </div>
        </>
    );
}
