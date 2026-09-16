import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // O usa <a> si manejas rutas nativas de Vite

const ApprenticeRegister = ({ courses = [], computers = [], onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: ''
    });

    // Actualizar el estado conforme el usuario escribe o selecciona
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
            
            {/* Botones de Acción Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/home" className="btn btn-secondary btn-sm shadow-sm text-decoration-none">
                    ← Volver al inicio
                </Link>
                <span className="text-muted fw-bold">Módulo de Aprendices</span>
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
                    <h4 className="mb-0 fw-bold">📝 Registrar Nuevo Aprendiz</h4>
                </div>
                
                <div className="card-body p-4 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Información Personal */}
                        <h5 className="text-success mb-3 border-bottom pb-2">👤 Datos Personales</h5>
                        
                        <div className="row g-3 mb-4">
                            {/* Nombre */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Nombre Completo:</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="Ej. Juan Pérez" 
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
                                    placeholder="ejemplo@misena.edu.co" 
                                    required 
                                />
                            </div>

                            {/* Celular */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Número de Celular:</label>
                                <input 
                                    type="text" 
                                    name="cell_number" 
                                    value={formData.cell_number}
                                    onChange={handleChange}
                                    className="form-control shadow-sm" 
                                    placeholder="3001234567" 
                                    required 
                                />
                            </div>
                        </div>

                        {/* Sección: Asignaciones */}
                        <h5 className="text-success mb-3 border-bottom pb-2">🏫 Ficha y Equipamiento</h5>

                        <div className="row g-3 mb-4">
                            {/* Curso asignado */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Curso Asignado (Ficha):</label>
                                <select 
                                    name="course_id" 
                                    value={formData.course_id}
                                    onChange={handleChange}
                                    className="form-select shadow-sm" 
                                    required
                                >
                                    <option value="">-- Seleccione Curso --</option>
                                    {courses.map((course) => (
                                        <option key={course.id} value={course.id}>
                                            Ficha: {course.course_number} - {course.day}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Computador asignado */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Computador Asignado:</label>
                                <select 
                                    name="computer_id" 
                                    value={formData.computer_id}
                                    onChange={handleChange}
                                    className="form-select shadow-sm" 
                                    required
                                >
                                    <option value="">-- Seleccione Computador --</option>
                                    {computers.map((computer) => (
                                        <option key={computer.id} value={computer.id}>
                                            {computer.brand} (N° {computer.number})
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Botón de Envío */}
                        <div className="text-end border-top pt-3">
                            <button type="submit" className="btn btn-success px-4 shadow" style={{ backgroundColor: '#39A900', border: 'none' }}>
                                💾 Guardar Aprendiz
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApprenticeRegister;