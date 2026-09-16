import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaRegister = ({ onSubmit, successMessage }) => {
    // Estado para el campo del formulario
    const [name, setName] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ name });
        }
    };

    return (
        <div className="container" style={{ maxWidth: '600px', marginTop: '30px' }}>
            
            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <Link to="/home" className="btn btn-secondary btn-sm shadow-sm text-decoration-none">
                    ← Volver al inicio
                </Link>
                <span className="text-muted fw-bold">Módulo de Áreas</span>
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
                    <h4 className="mb-0 fw-bold">➕ Registrar Nueva Área</h4>
                </div>

                <div className="card-body p-4 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Información del Área */}
                        <h5 className="text-success mb-3 border-bottom pb-2">📂 Datos del Área</h5>

                        <div className="mb-4">
                            {/* Nombre del Área */}
                            <label className="form-label fw-bold text-muted">Nombre del Área:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control shadow-sm" 
                                placeholder="Ej. Análisis y Desarrollo de Software" 
                                required 
                            />
                        </div>

                        {/* Botón de Registro */}
                        <div className="text-end border-top pt-3">
                            <button type="submit" className="btn btn-success px-4 shadow" style={{ backgroundColor: '#39A900', border: 'none' }}>
                                💾 Guardar Área
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AreaRegister;