import React, {useState} from 'react';
import './style.css';

import Nav from '../nav/Nav';
import Main from '../main/Main';

export default function Container(){
    const [CurrentPage, SetCurrentPage] = useState('add');

    return(
        <>
            <div className="container">
                <Nav SetCurrentPage={SetCurrentPage} CurrentPage={CurrentPage} />
                <Main CurrentPage={CurrentPage} />
            </div>
        </>
    );
}