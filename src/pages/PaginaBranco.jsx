import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import '../styles/pages/paginabranco.css';

function PaginaBranco() {
    return (
        <div id="paginaBranco">
            <Sidebar />
            <div className="paginabranco">
            <h1>This is the way</h1>
                <img src="https://i.pinimg.com/originals/66/36/c7/6636c71761b06f01db52fa22555053e1.jpg" alt="this is the way" height="230" width="230"/>

                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
}

export default PaginaBranco;