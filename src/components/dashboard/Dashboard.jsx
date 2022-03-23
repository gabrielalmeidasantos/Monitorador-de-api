import React from "react";
import "./style.css";

import Li from "./li/Li";

export default function Dashboard({ RefreshApi, APIs }) {
    return (
        <section className="container-dashboard">
            <div className="lista">
                <div className="timer">
                    Será atualizado em: {RefreshApi} segundos
                </div>
                <ul>
                    <Li APIs={APIs} />
                </ul>
            </div>
        </section>
    );
}
