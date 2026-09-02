import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        .hover-green {
          transition: all 0.25s ease-in-out;
        }
        .hover-green:hover {
          color: #39A900 !important;
          padding-left: 5px;
        }
        .social-btn {
          width: 36px;
          height: 36px;
          padding: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-color: rgba(255, 255, 255, 0.15) !important;
          transition: all 0.3s ease;
        }
        .social-btn:hover {
          background-color: #39A900 !important;
          border-color: #39A900 !important;
          transform: translateY(-3px);
          box-shadow: 0 4px 10px rgba(57, 169, 0, 0.3);
        }
      `}</style>

      <footer
        className="bg-dark text-light py-5 mt-5 border-top border-secondary"
        style={{ fontFamily: "'Segoe UI', Roboto, sans-serif" }}
      >
        <div className="container">
          <div className="row g-4">
            {/* Columna 1: Branding y Propósito */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex align-items-center mb-3">
                <div
                  style={{
                    width: '5px',
                    height: '32px',
                    backgroundColor: '#39A900',
                    borderRadius: '2px',
                  }}
                  className="me-2"
                ></div>
                <h4 className="text-white fw-bolder mb-0 tracking-wide">
                  AdminSENA
                </h4>
              </div>
              <p className="text-white-50 small pe-lg-4">
                Plataforma integral para la gestión, control e inventario de
                ambientes de formación, instructores y recursos tecnológicos de
                la institución.
              </p>
              <div className="d-inline-flex align-items-center bg-secondary bg-opacity-25 px-3 py-1 rounded-pill mt-2">
                <span
                  className="spinner-grow spinner-grow-sm text-success me-2"
                  role="status"
                  style={{ width: '10px', height: '10px' }}
                ></span>
                <span
                  className="text-white small fw-semibold"
                  style={{ fontSize: '0.75rem' }}
                >
                  Todos los sistemas operativos
                </span>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos de Navegación */}
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white fw-bold mb-3">Accesos Rápidos</h5>
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a
                        href="/teacher/create"
                        className="text-white-50 text-decoration-none hover-green small"
                      >
                        <i className="fas fa-chevron-right me-1 small"></i>{' '}
                        Instructores
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/area/create"
                        className="text-white-50 text-decoration-none hover-green small"
                      >
                        <i className="fas fa-chevron-right me-1 small"></i> Áreas
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/computer/create"
                        className="text-white-50 text-decoration-none hover-green small"
                      >
                        <i className="fas fa-chevron-right me-1 small"></i>{' '}
                        Inventario PC
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">
                      <a
                        href="/course"
                        className="text-white-50 text-decoration-none hover-green small"
                      >
                        <i className="fas fa-chevron-right me-1 small"></i>{' '}
                        Fichas/Cursos
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="/course-teacher"
                        className="text-white-50 text-decoration-none hover-green small"
                      >
                        <i className="fas fa-chevron-right me-1 small"></i>{' '}
                        Asignaciones
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Columna 3: Información del Centro de Formación */}
            <div className="col-lg-4 col-md-12">
              <h5 className="text-white fw-bold mb-3">Centro de Operación</h5>
              <p className="text-white-50 small mb-2">
                <i className="fas fa-map-marked-alt text-success me-2 fs-5"></i>{' '}
                Centro de Comercio y Servicios — Regional Cauca
              </p>
              <p className="text-white-50 small mb-2">
                <i className="fas fa-headset text-success me-2 fs-5"></i> Mesa
                de ayuda: +57 (602) 8224000
              </p>

              {/* Iconos de Redes */}
              <div className="mt-3">
                <a
                  href="https://facebook.com"
                  className="btn btn-outline-secondary btn-sm rounded-circle me-2 social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-white"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="btn btn-outline-secondary btn-sm rounded-circle me-2 social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-white"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="btn btn-outline-secondary btn-sm rounded-circle social-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-white"></i>
                </a>
              </div>
            </div>
          </div>

          <hr className="my-4 border-secondary opacity-50" />

          {/* Copyright y Crédito */}
          <div
            className="row align-items-center small"
            style={{ color: '#b0b3b8' }}
          >
            <div className="col-md-4 text-center text-md-start">
              <p className="mb-0">
                &copy; {currentYear}{' '}
                <strong className="text-white">AdminSENA</strong>. Hecho para
                el ambiente de formación.
              </p>
            </div>
            <div className="col-md-4 text-center my-2 my-md-0">
              <span className="badge bg-dark border border-secondary text-white px-3 py-2">
                Versión de Producción 2.1.0
              </span>
            </div>
            <div className="col-md-4 text-center text-md-end">
              <span className="text-success fw-bold fs-6">
                Yilmer Alexander Melenge Cordoba 👋
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;