import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ComputerRegister = ({ onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        number: '',
        brand: ''
    });

    // Manejar cambios en los inputs
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
                <span className="text-muted fw-bold">Módulo de Inventario</span>
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
                    <h4 className="mb-0 fw-bold">💻 Registrar Computador</h4>
                </div>

                <div className="card-body p-4 bg-light">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Especificaciones del Equipo */}
                        <h5 className="text-success mb-3 border-bottom pb-2">📋 Especificaciones del Equipo</h5>

                        <div className="row g-3 mb-4">
                            {/* Número del Computador */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Número de Computador / Plaqueta:</label>
                                <input
                                    type="text"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Ej. COMP-012"
                                    required
                                />
                            </div>

                            {/* Marca (Brand) */}
                            <div className="col-md-6">
                                <label className="form-label fw-bold text-muted">Marca (Brand):</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Ej. HP, Lenovo, Dell"
                                    required
                                />
                            </div>
                        </div>

                        {/* Botón de Registro */}
                        <div className="text-end border-top pt-3">
                            <button type="submit" className="btn btn-success px-4 shadow" style={{ backgroundColor: '#39A900', border: 'none' }}>
                                💾 Guardar Computador
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComputerRegister;