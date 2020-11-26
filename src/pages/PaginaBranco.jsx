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
                <Link to="/">Go Back</Link>
            </div>
        </div>
    );
}

export default PaginaBranco;