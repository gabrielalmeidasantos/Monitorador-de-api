import React from "react";
import "./style.css";
import Icon from "../../fonticon/Icon";

export default function Li(props) {
    return (
        <>
            {props.APIs.map((api) => {
                return (
                    <div key={api.id}>
                        <li className="li-api">
                            <span className="title">{api.nome}</span>
                            <span className="status">{api.status}</span>
                            <Icon icon="icon fa-solid fa-trash-can" />
                        </li>
                        <li className="li-api-url">
                            <p className="url">{api.url}</p>
                        </li>
                    </div>
                )
            })}
        </>
    );
}
