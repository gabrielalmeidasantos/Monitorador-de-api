import React from "react";
import "./style.css";
import Icon from "../../fonticon/Icon";
import Status from "./status/Status"

export default function Li(props) {
    if (props.APIs.length > 0) {
        return (
            <>
                {props.APIs.map((api) => {
                    return (
                        <div key={api.id}>
                            <li className="li-api">
                                <span className="title">{api.nome}</span>
                                <Status url={api.url} RefreshApi={props.RefreshApi} status={api.status} SetAPIs={props.SetAPIs} id={api.id}/>
                            </li>
                            <li className="li-api-url">
                                <p className="url">{api.url}</p>
                            </li>
                        </div>
                    );
                })}
            </>
        );
    } else {
        return <></>;
    }
}
