import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-custom shadow-sm">
      <div className="container">
        {/* Brand / Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold text-white" href="/">
          <span className="brand-icon d-flex align-items-center justify-content-center rounded-circle text-white">
            🏢
          </span>
          <span className="brand-text">
            Admin<span className="text-sena-green">SENA</span>
          </span>
        </a>

        {/* Botón Toggler para Responsive */}
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon navbar-toggler-icon-custom"></span>
        </button>

        {/* Links de Navegación */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 gap-1">
            <li className="nav-item">
              <a className="nav-link nav-link-custom active" href="/">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/apprentices">
                Aprendices
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/courses">
                Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/teachers">
                Instructores
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/computers">
                Equipos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-link-custom" href="/offers">
                Ofertas
              </a>
            </li>
          </ul>

          {/* Menú de Usuario / Notificaciones */}
          <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            {/* Botón de Ofertas en Header */}
            <a href="/offers" className="btn btn-sena-header rounded-pill btn-sm px-3 fw-bold text-white">
              📢 Convocatorias
            </a>

            {/* Dropdown de Perfil */}
            <div className="dropdown">
              <button
                className="btn user-dropdown-btn d-flex align-items-center gap-2 border-0 dropdown-toggle text-white"
                type="button"
                id="userDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="user-avatar rounded-circle d-flex align-items-center justify-content-center fw-bold">
                  A
                </div>
                <span className="d-none d-md-inline fw-semibold small">Admin SENA</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end shadow border-0 mt-2 p-2 dropdown-menu-custom" aria-labelledby="userDropdown">
                <li>
                  <a className="dropdown-item rounded py-2 small" href="/profile">
                    👤 Mi Perfil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded py-2 small" href="/settings">
                    ⚙️ Configuración
                  </a>
                </li>
                <li><hr className="dropdown-divider my-1" /></li>
                <li>
                  <a className="dropdown-item rounded py-2 small text-danger fw-bold" href="/logout">
                    🚪 Cerrar Sesión
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}