import React, { useState } from "react";
import "./style.css";

import Nav from "../nav/Nav";
import Main from "../main/Main";

// import dados from "../../data.json";

export default function Container() {
    const MINUTES_REFRESH_API = 1;
    const [CurrentPage, SetCurrentPage] = useState("dashboard");
    const [RefreshApi, SetRefreshApi] = useState(MINUTES_REFRESH_API * 60);
    const [APIs, SetAPIs] = useState([]);
    // const [APIsVerificadas, SetAPIsVerificadas] = useState([])

    setTimeout(() => {
        RefreshApi > 0 ? SetRefreshApi(RefreshApi - 1) : SetRefreshApi(60);
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
                    SetAPIs={SetAPIs}
                />
            </div>
        </>
    );
}
