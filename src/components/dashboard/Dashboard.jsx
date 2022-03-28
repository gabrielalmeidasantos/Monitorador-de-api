import React from "react";
import "./style.css";

import Li from "./li/Li";

export default function Dashboard({ RefreshApi, APIs, SetAPIs }) {
    if (APIs.length > 0) {
        return (
            <section className="container-dashboard">
                <div className="lista">
                    <div className="timer">
                        Será atualizado em: {RefreshApi} segundos
                    </div>
                    <ul>
                        <Li APIs={APIs} RefreshApi={RefreshApi} SetAPIs={SetAPIs}/>
                    </ul>
                </div>
            </section>
        );
    } else {
        return (
            <section className="container-dashboard">
                <div className="lista">
                    <div className="timer">Nenhuma API adicionada</div>
                </div>
            </section>
        );
    }
}
