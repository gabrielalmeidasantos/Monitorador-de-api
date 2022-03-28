import React from "react";
import "./style.css";

import Add from "../add/Add";
import Dashboard from "../dashboard/Dashboard";

export default function Main(props) {
    switch (props.CurrentPage) {
        case "dashboard":
            return (
                <main>
                    <Dashboard
                        RefreshApi={props.RefreshApi}
                        APIs={props.APIs}
                        SetAPIs={props.SetAPIs}
                    />
                </main>
            );
        case "add":
            return (
                <main>
                    <Add
                        SetAPIs={props.SetAPIs}
                        SetCurrentPage={props.SetCurrentPage}
                    />
                </main>
            );
        default:
            return <main></main>;
    }
}
