import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Navegacion = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to='/'> <i className="bi bi-house-fill"></i> Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to='/Ejercicios'>Ejercicios</Link>
                </li>
            </ul>
        </nav>
    );
};
