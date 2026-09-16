import React from 'react';
import { Link } from 'react-router-dom';

const AreaList = ({ areas = [], onDelete, successMessage }) => {
    return (
        <div className="container" style={{ maxWidth: '900px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-bold">Módulo de Áreas</span>
                {/* Botón para ir al formulario de creación */}
                <Link to="/AreaRegister" className="btn btn-success btn-sm shadow-sm text-decoration-none" style={{ backgroundColor: '#39A900', border: 'none' }}>
                    ➕ Registrar Nueva Área
                </Link>
            </div>

            {/* Alerta de Éxito Opcional */}
            {successMessage && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm border-0 mb-4" role="alert" style={{ borderLeft: '5px solid #39A900' }}>
                    <strong>¡Éxito!</strong> {successMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            {/* Tarjeta que contiene la Tabla */}
            <div className="card shadow border-0">
                
                {/* Encabezado de la Tarjeta */}
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">📋 Listado de Áreas Registradas</h4>
                </div>

                <div className="card-body p-0">
                    {/* Tabla Responsiva */}
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: '10%' }}>ID</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '60%' }}>Nombre del Área</th>
                                    <th className="py-3 text-center text-muted fw-bold" style={{ width: '30%' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {areas && areas.length > 0 ? (
                                    areas.map((area) => (
                                        <tr key={area.id}>
                                            {/* ID del Área */}
                                            <td className="ps-4 fw-bold text-secondary">
                                                {area.id}
                                            </td>

                                            {/* Nombre del Área */}
                                            <td className="fw-semibold text-dark">
                                                {area.name}
                                            </td>

                                            {/* Botones de Acciones */}
                                            <td className="pe-4">
                                                <div className="d-flex gap-2 justify-content-center align-items-center">

                                                    {/* Botón Mostrar */}
                                                    <Link to={`/area/${area.id}`} className="btn btn-primary btn-sm shadow-sm text-decoration-none">
                                                        Mostrar
                                                    </Link>

                                                    {/* Botón Editar */}
                                                    <Link to={`/area/${area.id}/edit`} className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none">
                                                        Editar
                                                    </Link>

                                                    {/* Botón Eliminar */}
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger btn-sm shadow-sm"
                                                        onClick={() => {
                                                            if (window.confirm('¿Estás seguro de que deseas eliminar esta área?')) {
                                                                if (onDelete) onDelete(area.id);
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
                                    /* Mensaje por si aún no hay áreas registradas */
                                    <tr>
                                        <td colSpan="3" className="text-center py-5 text-muted">
                                            <i className="fas fa-folder-open fs-2 mb-3 d-block text-secondary"></i>
                                            No hay áreas registradas en el sistema.
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


export default AreaList;