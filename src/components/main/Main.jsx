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
                    />
                </main>
            );
        case "add":
            return (
                <main>
                    <Add SetAPIs={props.SetAPIs} APIs={props.APIs} />
                </main>
            );
        default:
            return <main></main>;
    }
}
