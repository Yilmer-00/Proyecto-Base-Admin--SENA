import React, { useState } from "react";
import { Link } from "react-router-dom";

const CourseTeacherRegister = ({
  courses = [],
  teachers = [],
  onSubmit,
  successMessage,
}) => {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    curse_id: "",
    teacher_id: "",
  });

  // Manejar cambios en los selects
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "800px", marginTop: "30px" }}>
      {/* Botones de Navegación Rápida */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link
          to="/home"
          className="btn btn-secondary btn-sm shadow-sm text-decoration-none"
        >
          ← Volver al inicio
        </Link>
        <span className="text-muted fw-bold">Módulo de Asignaciones</span>
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

      {/* Tarjeta del Formulario */}
      <div className="card shadow border-0">
        {/* Encabezado con el Verde SENA */}
        <div
          className="card-header text-white py-3"
          style={{ backgroundColor: "#39A900" }}
        >
          <h4 className="mb-0 fw-bold">🔗 Asignar Instructor a un Curso</h4>
        </div>

        <div className="card-body p-4 bg-light">
          <form onSubmit={handleSubmit}>
            {/* Sección: Datos de la Vinculación */}
            <h5 className="text-success mb-3 border-bottom pb-2">
              📋 Detalles de la Vinculación
            </h5>

            <div className="row g-3 mb-4">
              {/* Selector de Curso */}
              <div className="col-md-6">
                <label
                  htmlFor="curse_id"
                  className="form-label fw-bold text-muted"
                >
                  Seleccione el Curso (Ficha):
                </label>
                <select
                  name="curse_id"
                  id="curse_id"
                  value={formData.curse_id}
                  onChange={handleChange}
                  className="form-select shadow-sm"
                  required
                >
                  <option value="">-- Seleccione un Curso --</option>
                  {courses.map((course) => (
                    <option key={course.id} value={course.id}>
                      {course.course_number} — {course.day}
                    </option>
                  ))}
                </select>
              </div>

              {/* Selector de Instructor */}
              <div className="col-md-6">
                <label
                  htmlFor="teacher_id"
                  className="form-label fw-bold text-muted"
                >
                  Seleccione el Instructor:
                </label>
                <select
                  name="teacher_id"
                  id="teacher_id"
                  value={formData.teacher_id}
                  onChange={handleChange}
                  className="form-select shadow-sm"
                  required
                >
                  <option value="">-- Seleccione un Instructor --</option>
                  {teachers.map((teacher) => (
                    <option key={teacher.id} value={teacher.id}>
                      {teacher.name} ({teacher.email})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Botón de Registro */}
            <div className="text-end border-top pt-3">
              <button
                type="submit"
                className="btn btn-success px-4 shadow"
                style={{ backgroundColor: "#39A900", border: "none" }}
              >
                🔗 Asignar Instructor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseTeacherRegister;
