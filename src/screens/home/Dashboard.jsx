import React, { useState } from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  return (
    <div className="container-fluid px-0">
      {/* Banner Flotante / Carrusel de Anuncios */}
      {showAnnouncement && (
        <div id="announcementContainer" className="position-relative mb-5 announcement-container">
          <div
            id="announcementCarousel"
            className="carousel slide shadow-lg text-white announcement-carousel"
            data-bs-ride="carousel"
          >
            {/* Botón para cerrar/descartar el anuncio */}
            <button
              type="button"
              onClick={() => setShowAnnouncement(false)}
              className="btn-close btn-close-white position-absolute top-0 end-0 m-3 btn-close-custom"
              aria-label="Cerrar"
            ></button>

            {/* Indicadores */}
            <div className="carousel-indicators mb-2">
              <button
                type="button"
                data-bs-target="#announcementCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Anuncio 1"
              ></button>
              <button
                type="button"
                data-bs-target="#announcementCarousel"
                data-bs-slide-to="1"
                aria-label="Anuncio 2"
              ></button>
              <button
                type="button"
                data-bs-target="#announcementCarousel"
                data-bs-slide-to="2"
                aria-label="Anuncio 3"
              ></button>
              <button
                type="button"
                data-bs-target="#announcementCarousel"
                data-bs-slide-to="3"
                aria-label="Anuncio 4"
              ></button>
            </div>

            {/* Diapositivas de Anuncios */}
            <div className="carousel-inner">
              {/* Anuncio 1 */}
              <div className="carousel-item active" data-bs-interval="6000">
                <div className="p-4 p-md-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div className="announcement-text-max">
                    <span className="badge px-3 py-2 rounded-pill fw-bold mb-2 badge-sena">
                      📢 NOVEDAD DEL SISTEMA
                    </span>
                    <h3 className="fw-bold mb-2">¡Nuevo Módulo de Exportación de Reportes!</h3>
                    <p className="mb-0 text-white-50">
                      Ahora puedes generar listas completas de computadores e instructores asignados directamente en Excel y PDF.
                    </p>
                  </div>
                  <div>
                    <a href="/computers" className="btn btn-outline-light rounded-pill px-4 py-2 hover-scale">
                      Ver Módulo
                    </a>
                  </div>
                </div>
              </div>

              {/* Anuncio 2 */}
              <div className="carousel-item" data-bs-interval="6000">
                <div className="p-4 p-md-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div className="announcement-text-max">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
                      ⚠️ ATENCIÓN INSTRUCTORES
                    </span>
                    <h3 className="fw-bold mb-2">Cierre de Registro de Fichas</h3>
                    <p className="mb-0 text-white-50">
                      Recuerda verificar que todos los aprendices vinculados a tu formación estén registrados correctamente en el sistema.
                    </p>
                  </div>
                  <div>
                    <a href="/courses" className="btn btn-outline-light rounded-pill px-4 py-2 hover-scale">
                      Revisar Fichas
                    </a>
                  </div>
                </div>
              </div>

              {/* Anuncio 3 */}
              <div className="carousel-item" data-bs-interval="6000">
                <div className="p-4 p-md-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div className="announcement-text-max">
                    <span className="badge bg-info text-dark px-3 py-2 rounded-pill fw-bold mb-2">
                      🔔 MANTENIMIENTO PROGRAMADO
                    </span>
                    <h3 className="fw-bold mb-2">Actualización de Servidores</h3>
                    <p className="mb-0 text-white-50">
                      La plataforma estará en mantenimiento el sábado de 10:00 PM a 2:00 AM para optimización de la base de datos.
                    </p>
                  </div>
                  <div>
                    <span className="badge bg-white bg-opacity-10 text-white px-3 py-2 rounded-pill border border-white border-opacity-25">
                      Sábado 10:00 PM
                    </span>
                  </div>
                </div>
              </div>

              {/* Anuncio 4 */}
              <div className="carousel-item" data-bs-interval="6000">
                <div className="p-4 p-md-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
                  <div className="announcement-text-max">
                    <span className="badge bg-warning text-dark px-3 py-2 rounded-pill fw-bold mb-2">
                      📢 CONVOCATORIAS ABIERTAS
                    </span>
                    <h3 className="fw-bold mb-2">Descubre las Ofertas de Formación</h3>
                    <p className="mb-0 text-white-50">
                      Explora los programas disponibles, consulta estadísticas de aspirantes en tiempo real y monitorea los cupos de cada ficha.
                    </p>
                  </div>
                  <div>
                    <a href="/offers" className="btn btn-outline-light rounded-pill px-4 py-2 hover-scale">
                      Ver Ofertas
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Controles de navegación */}
            <button
              className="carousel-control-prev carousel-control-custom"
              type="button"
              data-bs-target="#announcementCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button
              className="carousel-control-next carousel-control-custom"
              type="button"
              data-bs-target="#announcementCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      )}

      {/* Contenedor Principal */}
      <div className="container dashboard-main-container">
        {/* Banner de Bienvenida */}
        <div className="card border-0 shadow-sm text-white mb-5 banner-welcome">
          <div className="card-body p-5 d-flex align-items-center justify-content-between flex-wrap gap-4">
            <div>
              <h1 class="display-5 fw-bold mb-2">¡Bienvenido a AdminSena!</h1>
              <p className="lead mb-0 opacity-90">
                Sistema de gestión de inventarios, aprendices, instructores y ambientes de formación.
              </p>
            </div>
            <div className="fs-1 bg-white bg-opacity-20 p-4 rounded-circle d-flex align-items-center justify-content-center shadow-sm welcome-icon">
              🏢
            </div>
          </div>
        </div>

        {/* Sección: Estado del Sistema */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h4 className="text-secondary fw-bold mb-0">📊 Estado del Sistema (Métricas)</h4>
          <a href="/offers" className="btn text-white fw-bold px-4 py-2 rounded-pill shadow-sm btn-sena">
            📢 Ver Ofertas de Formación
          </a>
        </div>

        <div className="row g-4 mb-5">
          {/* Aprendices */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-aprendices">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Aprendices</span>
                  <h3 className="fw-bold mb-0 text-dark">Activos</h3>
                </div>
                <span className="fs-2 text-success">👨‍🎓</span>
              </div>
            </div>
          </div>

          {/* Instructores */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-instructores">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Instructores</span>
                  <h3 className="fw-bold mb-0 text-dark">Asignados</h3>
                </div>
                <span className="fs-2 text-navy">👨‍🏫</span>
              </div>
            </div>
          </div>

          {/* Cursos */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-cursos">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Cursos / Fichas</span>
                  <h3 className="fw-bold mb-0 text-dark">Registrados</h3>
                </div>
                <span className="fs-2 text-warning">📚</span>
              </div>
            </div>
          </div>

          {/* Computadores */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-computadores">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Inventario PC</span>
                  <h3 className="fw-bold mb-0 text-dark">Equipos</h3>
                </div>
                <span className="fs-2 text-info">💻</span>
              </div>
            </div>
          </div>

          {/* Áreas */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-areas">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Áreas</span>
                  <h3 className="fw-bold mb-0 text-dark">Especialidades</h3>
                </div>
                <span className="fs-2 text-purple">🛠️</span>
              </div>
            </div>
          </div>

          {/* Centros */}
          <div className="col-md-4 col-sm-6">
            <div className="card h-100 border-0 shadow-sm p-3 metric-card metric-centros">
              <div className="d-flex align-items-center justify-content-between">
                <div>
                  <span className="text-muted fw-semibold d-block mb-1">Sedes</span>
                  <h3 className="fw-bold mb-0 text-dark">Centros</h3>
                </div>
                <span className="fs-2 text-pink">🏛️</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sección: Accesos Rápidos */}
        <h4 className="text-secondary fw-bold mb-4">🚀 Panel de Accesos Rápidos</h4>
        <div className="row g-4">
          {/* Tarjeta: Aprendices */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Gestión de Aprendices</h5>
                  <p className="text-muted small">
                    Administra los datos personales de los estudiantes, asignación de computadores y fichas asociadas.
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/apprentices" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/apprentices/register" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Cursos */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Cursos y Fichas</h5>
                  <p className="text-muted small">
                    Organiza las fichas de formación, jornadas de estudio, áreas técnicas y centros responsables.
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/courses" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/courses/register" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Instructores */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Instructores</h5>
                  <p className="text-muted small">
                    Controla el personal docente, sus correos de contacto, especialidad y vincula su labor a las fichas.
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/teachers" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/teachers/create" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Computadores */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Inventario de Equipos</h5>
                  <p className="text-muted small">
                    Registra marcas y números de plaqueta para mantener el control de los computadores de la institución.
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/computers" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/computers/create" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Áreas */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Áreas de Formación</h5>
                  <p className="text-muted small">
                    Define las diferentes tecnologías y programas académicos (Sistemas, Diseño, Contabilidad, etc.).
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/areas" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/areas/create" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Centros */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100 hover-shadow transition-all quick-card">
              <div className="card-body p-4 bg-white d-flex flex-column justify-content-between">
                <div>
                  <h5 className="fw-bold text-dark mb-2">Centros de Formación</h5>
                  <p className="text-muted small">
                    Crea y edita los centros físicos de capacitación institucional junto con sus ubicaciones geográficas.
                  </p>
                </div>
                <div className="d-flex gap-2 mt-3 pt-3 border-top">
                  <a href="/training-centers" className="btn btn-outline-success btn-sm w-100">
                    Ver Listado
                  </a>
                  <a href="/training-centers/create" className="btn btn-success btn-sm w-100 btn-sena border-0">
                    Registrar
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}