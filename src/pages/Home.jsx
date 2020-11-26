import React from 'react';
import DayPicker from 'react-daypicker';
import { CgEditBlackPoint } from 'react-icons/cg';
import { FaCog, FaExclamationCircle, FaPlusCircle, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import 'react-daypicker/lib/DayPicker.css';
import Sidebar from '../components/Sidebar';
import '../styles/pages/home.css';

function Teste() {
    return (
        <div id="app-content">
            <div className="sidebar">
                <Sidebar />
            </div>

            <div className="main-content">
                <div className="title">
                    <h2>Dashboard</h2>
                    <div className="alert">
                        <FaExclamationCircle />
                        <strong>Não esqueça de pôr as notas dos seus alunos!</strong>
                    </div>
                </div>

                <div className="class">
                    <h3>Turmas</h3>
                    <div className="class-btn">
                        <Link to ="/paginabranco">
                            <FaPlusCircle />
                            <strong>Criar uma nova turma</strong>
                        </Link>
                    </div>
                </div>

                <div className="table">
                    <div className="turma">
                        <h3>Turma</h3>
                        <div className="curso">
                            <strong>Introdução a C</strong>
                            <strong>Computação em nuvem</strong>
                            <strong>Introdução a back-end</strong>
                            <strong>Introdução a front-end</strong>
                        </div>
                    </div>
                    <div className="codigo">
                        <h3>Código</h3>
                        <div className="cod">
                            <strong>Sistemas Embarcados</strong>
                            <strong>DEVOPS</strong>
                            <strong>Desenvolvimento Web</strong>
                            <strong>Desenvolvimento Mobile</strong>
                        </div>
                    </div>
                    <div className="student">
                        <h3>Alunos</h3>
                        <div className="quant">
                            <strong>52</strong>
                            <strong>31</strong>
                            <strong>25</strong>
                            <strong>25</strong>
                        </div>
                    </div>
                </div>

                <div className="profile">
                    <div className="points">
                        <CgEditBlackPoint />
                        <strong>57</strong>
                    </div>

                    <div className="profil">
                        <Link to="/paginabranco">
                            <FaUserCircle />
                        </Link>
                    </div>

                    <div className="configuration">
                        <Link to="/paginabranco">
                            <FaCog />
                        </Link>
                    </div>

                    <div className="menu-drop">
                        <button type="button" className="drop">
                            <img src="https://i.pinimg.com/originals/66/36/c7/6636c71761b06f01db52fa22555053e1.jpg" alt="avatar"/>
                        </button>
                        <div className="dropdown-content">
                            <Link to="/paginabranco">
                                <strong>This is the way</strong>
                            </Link>
                        </div>
                    </div>

                </div>

                <div className="calendar">
                    <strong>Calendário</strong>
                    <div className="daypacker">
                        <DayPicker />
                    </div>
                </div>

                <div className="create-btn">
                    <div className="create-activities">
                        <Link to ="/paginabranco">
                            <FaPlusCircle />
                            <strong>Criar uma nova turma</strong>
                        </Link>
                    </div>
                    <div className="submit-notes">
                        <Link to ="/paginabranco">
                            <FaPlusCircle />
                            <strong>Submeter notas dos alunos</strong>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
   );
}

export default Teste;