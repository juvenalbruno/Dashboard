import React from 'react';
import { FaExclamationCircle, FaPlusCircle, FaUserCircle, FaCog } from 'react-icons/fa';
import { CgEditBlackPoint } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';

import Sidebar from '../components/Sidebar';

import '../styles/pages/home.css';

function Home() {
    return (
        <div id="page-home">
            <Sidebar />

            <div className="container">
                <h1>Dashboard</h1>

                <div className="notification">
                    <FaExclamationCircle />
                    <h2>Não esqueça de pôr as notas dos seus alunos!</h2>
                </div>

                <div className="class">
                    <h2>Turmas</h2>

                    <Link to="/paginabranco">
                        <FaPlusCircle />
                        <h2>Criar uma nova turma</h2>
                    </Link>
                </div>

                <div className="table">
                    <div className="turma">
                        <h3>Turma</h3>
                    </div>
                    <div className="cursos">
                        <h4>Introdução a C</h4>
                        <h4>Computação em nuvem</h4>
                        <h4>Introdução a front-end</h4>
                    </div>

                    <div className="codigo">
                        <h3>Código</h3>
                    </div>
                    <div className="tipos-codigos">
                        <h4>Sistemas Embarcados</h4>
                        <h4>DEVOPS</h4>
                        <h4>Desenvolvimento Web</h4>
                    </div>

                    <div className="alunos">
                        <h3>Alunos</h3>
                    </div>
                    <div className="quantidade-alunos">
                        <h4>52</h4>
                        <h4>31</h4>
                        <h4>25</h4>
                    </div>
                </div>
            </div>

            <div className="calendar">
                <div className="options">
                    <div className="points">
                        <CgEditBlackPoint />
                        <h3>57</h3>
                    </div>

                    <Link to="/paginabranco">
                        <FaUserCircle />
                    </Link>

                    <Link to="/paginabranco">
                        <FaCog />
                    </Link>

                    <div className="menu-drop">
                        <button type="button" className="drop">
                            <img src="https://i.pinimg.com/originals/66/36/c7/6636c71761b06f01db52fa22555053e1.jpg" alt="avatar"/>
                        </button>
                        <div className="drop-content">
                            <Link to="paginabranco">
                                <h3>This is the way</h3>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="date">
                    <h3>Calendário</h3>
                    <div className="calendario">
                        <DayPicker />
                    </div>
                </div>

                <div className="calendar-buttons">

                    <Link to="/paginabranco">
                        <FaPlusCircle />
                        <h2>Criar uma nova atividade</h2>
                    </Link>

                    <Link to="/paginabranco">
                        <FaPlusCircle />
                        <h2>Submeter Notas aos alunos</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;