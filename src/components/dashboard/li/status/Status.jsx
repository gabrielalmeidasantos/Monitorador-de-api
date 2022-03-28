import React, { useState } from "react";
import requestApi from "../../../requisicao/requisicao";

export default function Status({ url, RefreshApi, status }) {
    const [stateStatus, SetStateStatus] = useState(status);

    if (RefreshApi === 0) {
        requestApi(url)
            .then((response) => {
                response ? SetStateStatus(response) : SetStateStatus('Undefined');
            })
            .catch((err) => {
                err ? SetStateStatus(err) : SetStateStatus('Undefined');
            });
    }

    return <span className="status">Status: {stateStatus}</span>;
}
