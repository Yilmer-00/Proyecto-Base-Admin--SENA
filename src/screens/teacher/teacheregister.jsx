import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TeacherRegister = ({ areas = [], trainingCenters = [], onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        area_id: '',
        trainig_center_id: ''
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
                <span className="text-muted fw-bold">Módulo de Instructores</span>
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
                    <h4 className="mb-0 fw-bold">➕ Registrar Nuevo Instructor</h4>
                </div>
                
                <div className="card-body p-4 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Información Personal */}
                        <h5 className="text-success mb-3 border-bottom pb-2">👤 Datos de Identificación</h5>
                        
                        <div className="row g-3 mb-4">
                            {/* Nombre del Instructor */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Nombre Completo:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="Ej. Ing. Carlos Alvarado" 
                                    required 
                                />
                            </div>

                            {/* Email */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Correo Electrónico:</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="calvarado@sena.edu.co" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Sección: Asignación de Sede y Especialidad */}
                        <h5 className="text-success mb-3 border-bottom pb-2">💼 Especialidad y Sede</h5>

                        <div className="row g-3 mb-4">
                            {/* Selector de Área */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Área de Especialidad:</label>
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
                                    name="trainig_center_id" 
                                    value={formData.trainig_center_id}
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
                                💾 Guardar Instructor
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default TeacherRegister;