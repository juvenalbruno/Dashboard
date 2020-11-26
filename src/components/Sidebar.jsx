import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosFlask }  from 'react-icons/io';
import { FaShoppingCart, FaBug, FaUserCircle} from 'react-icons/fa';


import logo from '../assets/logo.png';
import '../styles/components/sidebar.css'

function Sidebar() {
    return (
        <aside className="app-sidebar">
            <ul>
                <li className="logo">
                    <img src={logo} alt="Campus Maker"/>
                    <h2>Campus Maker</h2>
                </li>
                <li>
                    <Link to="/paginabranco">
                        <span className="icon"><IoIosFlask /></span>
                        <span className="title">Função 1</span>
                    </Link>
                </li>
                <li>
                    <Link to="/paginabranco">
                        <span className="icon"><FaShoppingCart /></span>
                        <span className="title">Função 2</span>
                    </Link>
                </li>
                <li>
                    <Link to="/paginabranco">
                        <span className="icon"><FaUserCircle /></span>
                        <span className="title">Função 3</span>
                    </Link>
                </li>
                <li>
                    <Link to="/paginabranco" className="footer">
                        <span className="icon"><FaBug /></span>
                        <span className="title">Função 4</span>
                    </Link>
                </li>
            </ul>

            {/*
            <header>
                <img src={logo} alt="Campus Maker"/>
            </header>

            <body>
                <Link to="/paginabranco">
                    <IoIosFlask />
                </Link>

                <Link to="/paginabranco">
                    <FaShoppingCart />
                </Link>

                <Link to="/paginabranco">
                    <FaUserCircle />
                </Link>
            </body>

            <footer>
                <Link to="/paginabranco">
                    <FaBug />
                </Link>
            </footer> */}


        </aside>
    );
}

export default Sidebar;