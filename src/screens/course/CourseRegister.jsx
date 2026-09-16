import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseRegister = ({ areas = [], trainingCenters = [], onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        course_number: '',
        day: '',
        area_id: '',
        training_center_id: ''
    });

    // Manejar cambios en los inputs y selects
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
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
        <div className="container" style={{ maxWidth: '800px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/home" className="btn btn-secondary btn-sm shadow-sm text-decoration-none">
                    ← Volver al inicio
                </Link>
                <span className="text-muted fw-bold">Módulo de Cursos</span>
            </div>

            {/* Alerta de Éxito Opcional */}
            {successMessage && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm border-0 mb-4" role="alert" style={{ borderLeft: '5px solid #39A900' }}>
                    <strong>¡Éxito!</strong> {successMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            {/* Tarjeta del Formulario */}
            <div className="card shadow border-0">
                
                {/* Encabezado con el Verde SENA */}
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">➕ Registrar Nuevo Curso</h4>
                </div>

                <div className="card-body p-4 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Información Básica del Curso */}
                        <h5 className="text-success mb-3 border-bottom pb-2">📖 Identificación del Curso</h5>

                        <div className="row g-3 mb-4">
                            {/* Número de Curso */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Número de Curso (Ficha):</label>
                                <input 
                                    type="text" 
                                    name="course_number" 
                                    value={formData.course_number}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="Ej. 2711823" 
                                    required 
                                />
                            </div>

                            {/* Día / Jornada */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Día / Jornada:</label>
                                <input 
                                    type="text" 
                                    name="day" 
                                    value={formData.day}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="Ej. Mañana / Lunes a Viernes" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Sección: Clasificación y Ubicación */}
                        <h5 className="text-success mb-3 border-bottom pb-2">📍 Clasificación y Ubicación</h5>

                        <div className="row g-3 mb-4">
                            {/* Selector de Área */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Área Relacionada:</label>
                                <select 
                                    name="area_id" 
                                    value={formData.area_id}
                                    onChange={handleChange}
                                    className="form-select shadow-sm" 
                                    required
                                >
                                    <option value="">-- Seleccione Área --</option>
                                    {areas.map((area) => (
                                        <option key={area.id} value={area.id}>
                                            {area.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Selector de Centro de Formación */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Centro de Formación:</label>
                                <select 
                                    name="training_center_id" 
                                    value={formData.training_center_id}
                                    onChange={handleChange}
                                    className="form-select shadow-sm" 
                                    required
                                >
                                    <option value="">-- Seleccione Centro --</option>
                                    {trainingCenters.map((center) => (
                                        <option key={center.id} value={center.id}>
                                            {center.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Botón de Registro */}
                        <div className="text-end border-top pt-3">
                            <button type="submit" className="btn btn-success px-4 shadow" style={{ backgroundColor: '#39A900', border: 'none' }}>
                                💾 Guardar Curso
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default CourseRegister;