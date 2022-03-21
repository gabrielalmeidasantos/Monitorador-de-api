import React, {useState} from 'react';
import './style.css';

import Nav from '../nav/Nav';
import Main from '../main/Main';

export default function Container(){
    const [ShowModal, SetShowModal] = useState(false);

    return(
        <>
            <div className="container">
                <Nav setshowmodal={SetShowModal} showmodal={ShowModal}/>
                <Main setshowmodal={SetShowModal} showmodal={ShowModal} />
            </div>
        </>
    );
}