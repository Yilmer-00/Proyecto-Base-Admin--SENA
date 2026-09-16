import React from "react";
import { Link } from "react-router-dom";

const CourseTeacherList = ({
  courseTeachers = [],
  onDelete,
  successMessage,
}) => {
  return (
    <div
      className="container"
      style={{ maxWidth: "1050px", marginTop: "30px" }}
    >
      {/* Botones de Navegación Rápida */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="text-muted fw-bold">Módulo de Asignaciones</span>
        {/* Botón que apunta a la ruta de registro */}
        <Link
          to="/CourseTeacherRegister"
          className="btn btn-success btn-sm shadow-sm text-decoration-none"
          style={{ backgroundColor: "#39A900", border: "none" }}
        >
          ➕ Asignar Nuevo Instructor
        </Link>
      </div>

      {/* Alerta de Éxito Opcional */}
      {successMessage && (
        <div
          className="alert alert-success alert-dismissible fade show shadow-sm border-0 mb-4"
          role="alert"
          style={{ borderLeft: "5px solid #39A900" }}
        >
          <strong>¡Éxito!</strong> {successMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}

      {/* Tarjeta que contiene la Tabla */}
      <div className="card shadow border-0">
        {/* Encabezado de la Tarjeta con el Verde SENA */}
        <div
          className="card-header text-white py-3"
          style={{ backgroundColor: "#39A900" }}
        >
          <h4 className="mb-0 fw-bold">
            📅 Asignación de Instructores a Cursos
          </h4>
        </div>

        <div className="card-body p-0">
          {/* Tabla Responsiva */}
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th
                    className="ps-4 py-3 text-muted fw-bold"
                    style={{ width: "8%" }}
                  >
                    ID
                  </th>
                  <th
                    className="py-3 text-muted fw-bold"
                    style={{ width: "22%" }}
                  >
                    Número de Curso (Ficha)
                  </th>
                  <th
                    className="py-3 text-muted fw-bold"
                    style={{ width: "15%" }}
                  >
                    Jornada
                  </th>
                  <th
                    className="py-3 text-muted fw-bold"
                    style={{ width: "23%" }}
                  >
                    Instructor Asignado
                  </th>
                  <th
                    className="py-3 text-muted fw-bold"
                    style={{ width: "17%" }}
                  >
                    Email Instructor
                  </th>
                  <th
                    className="py-3 text-center text-muted fw-bold"
                    style={{ width: "15%" }}
                  >
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {courseTeachers && courseTeachers.length > 0 ? (
                  courseTeachers.map((assignment) => (
                    <tr key={assignment.id}>
                      {/* ID */}
                      <td className="ps-4 fw-bold text-secondary">
                        {assignment.id}
                      </td>

                      {/* Número de Ficha */}
                      <td className="fw-bold text-dark">
                        <span className="badge bg-secondary bg-opacity-10 text-dark border px-2 py-1.5">
                          {assignment.course?.course_number ||
                            assignment.curse?.course_number ||
                            "N/A"}
                        </span>
                      </td>

                      {/* Jornada (Day) */}
                      <td className="text-secondary">
                        <i className="far fa-clock text-success me-1"></i>
                        {assignment.course?.day ||
                          assignment.curse?.day ||
                          "N/A"}
                      </td>

                      {/* Instructor */}
                      <td className="fw-semibold text-dark">
                        {assignment.teacher?.name || "Sin Instructor"}
                      </td>

                      {/* Email Instructor */}
                      <td className="text-secondary small text-break">
                        {assignment.teacher?.email || "N/A"}
                      </td>

                      {/* Botones de Acciones */}
                      <td className="pe-4 text-center">
                        <div className="d-flex gap-2 justify-content-center align-items-center">
                          {/* Botón Mostrar */}
                          <Link
                            to={`/course-teacher/${assignment.id}`}
                            className="btn btn-primary btn-sm text-white fw-semibold shadow-sm text-decoration-none"
                          >
                            Mostrar
                          </Link>

                          {/* Botón Editar */}
                          <Link
                            to={`/course-teacher/${assignment.id}/edit`}
                            className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none"
                          >
                            Editar
                          </Link>

                          {/* Botón Eliminar */}
                          <button
                            type="button"
                            className="btn btn-danger btn-sm shadow-sm"
                            onClick={() => {
                              if (
                                window.confirm(
                                  "¿Estás seguro de que deseas eliminar esta asignación?",
                                )
                              ) {
                                if (onDelete) onDelete(assignment.id);
                              }
                            }}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  /* Mensaje por si la tabla está vacía */
                  <tr>
                    <td colSpan="6" className="text-center py-5 text-muted">
                      <i className="fas fa-link fs-2 mb-3 d-block text-secondary"></i>
                      No hay asignaciones de instructores registradas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacherList;
