import React from "react";
import "./style.css";

import Add from "../add/Add";

export default function Main(props) {
    if (props.CurrentPage === 'add') {        
        return (
            <main>
                <Add />
            </main>
        );
    }else{
        return (
            <main>
                
            </main>
        )
    }
}
