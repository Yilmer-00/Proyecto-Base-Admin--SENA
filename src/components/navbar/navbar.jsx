import React from 'react';


const Navbar = ({ user, onLogout }) => {
    return (
        <>
            {/* Estilos personalizados para el hover de los enlaces */}
            <style>
                {`
                    .navbar-nav .nav-link:hover {
                        color: #ffffff !important;
                        background-color: rgba(0, 255, 55, 0.12);
                        border-radius: 4px;
                        transition: all 0.3s ease;
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: '#39A900' }}>
                <div className="container-fluid">

                    {/* LOGO */}
                    <a className="navbar-brand d-flex align-items-center" href="/home">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM-jtaxKYljPzx7-TEn-u8MQWRjFmSUTMIrZAYLFB4ZfIHjBOlRQPlGA&s=10"
                            alt="Logo"
                            width="40"
                            height="40"
                            className="d-inline-block align-text-top me-2"
                            style={{ borderRadius: '5px' }}
                        />
                        <span className="fw-bold text-white">AdminSENA</span>
                    </a>

                    {/* BOTÓN RESPONSIVE */}
                    <button 
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            {/* ================================================= */}
                            {/* OPCIONES DE INGRESO DE DATOS (ADMIN) */}
                            {/* ================================================= */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white-50" href="#" id="adminDataDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ingresar Datos
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="adminDataDropdown">
                                    <li><a className="dropdown-item" href="/AreaRegister">Área</a></li>
                                    <li><a className="dropdown-item" href="/ApprenticeRegister">Aprendices</a></li>
                                    <li><a className="dropdown-item" href="/TrainingCenterRegister">Centro de estudio</a></li>
                                    <li><a className="dropdown-item" href="/ComputerRegister">Nuevo Equipo</a></li>
                                    <li><a className="dropdown-item" href="/TeacherRegister">Instructores</a></li>
                                    <li><a className="dropdown-item" href="/CourseRegister">Curso</a></li>
                                    <li><a className="dropdown-item" href="/CourseTeacherRegister">Asignar</a></li>
                                </ul>
                            </li>

                            {/* ================================================= */}
                            {/* AJUSTES DEL SISTEMA (ADMIN) */}
                            {/* ================================================= */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white-50" href="#" id="systemSettingsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Ajustes del sistema
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="systemSettingsDropdown">
                                    <li>
                                        <a className="dropdown-item" href="/announcements">
                                            Gestión de Anuncios
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/* ================================================= */}
                            {/* MENÚ ADMINISTRACIÓN (ADMIN) */}
                            {/* ================================================= */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-white-50" href="#" id="adminManageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Administración
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="adminManageDropdown">
                                    <li><a className="dropdown-item" href="/AreaList">Gestión de Áreas</a></li>
                                    <li><a className="dropdown-item" href="/ComputerList">Gestión de Equipos</a></li>
                                    <li><a className="dropdown-item" href="/TeacherList">Gestión de Instructores</a></li>
                                    <li><a className="dropdown-item" href="/CourseList">Gestión de Cursos</a></li>
                                    <li><a className="dropdown-item" href="/CourseTeacherList">Instructores en Curso</a></li>
                                    <li><a className="dropdown-item" href="/TrainingCenterList">Centro de estudio</a></li>
                                    <li><a className="dropdown-item" href="/ApprenticeList">Gestión de Aprendices</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/about">Quiénes Somos</a></li>
                                    <li><a className="dropdown-item" href="/carnet">Perfil</a></li>
                                </ul>
                            </li>

                        </ul>

                        {/* ESPACIO DEL NAVBAR */}
                        <form className="d-flex align-items-center m-0 me-4 me-lg-5" role="search"></form>

                        {/* NOTIFICACIONES */}
                        <a href="/notifications"
                            className="btn position-relative text-white border-0 me-3 d-inline-flex align-items-center justify-content-center rounded-circle"
                            style={{ width: '40px', height: '40px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                            title="Centro de Notificaciones">
                            🔔
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger border border-light"
                                style={{ fontSize: '0.7rem', padding: '0.3em 0.5em' }}>
                                3
                            </span>
                        </a>

                        {/* USUARIO ADMINISTRADOR */}
                        <div className="dropdown">
                            <button
                                className="btn btn-light fw-bold rounded-pill px-3 dropdown-toggle shadow-sm d-flex align-items-center gap-2"
                                type="button"
                                id="userMenu"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {/* BADGE DE ROL ADMIN */}
                                <span className="badge bg-danger text-white rounded-pill px-2 py-1" style={{ fontSize: '10px' }}>
                                    ADMIN
                                </span>

                                {/* NOMBRE */}
                                <span className="text-dark">
                                    {user?.name || 'Administrador'}
                                </span>
                            </button>

                            {/* MENÚ DEL USUARIO */}
                            <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2" aria-labelledby="userMenu">
                                <li className="px-3 py-2 border-bottom">
                                    <small className="d-block text-muted" style={{ fontSize: '11px' }}>Conectado como:</small>
                                    <span className="d-block fw-bold text-dark small">
                                        {user?.email || 'admin@sena.edu.co'}
                                    </span>
                                </li>
                                <li>
                                    <a className="dropdown-item py-2 d-flex align-items-center gap-2" href="/carnet">
                                        Mi Perfil / Carnet
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider my-1" />
                                </li>
                                <li>
                                    <button 
                                        onClick={onLogout}
                                        className="dropdown-item text-danger fw-semibold py-2 d-flex align-items-center gap-2 w-100 text-start border-0 bg-transparent"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;