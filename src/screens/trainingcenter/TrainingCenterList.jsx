import React from 'react';
import { Link } from 'react-router-dom';

const TrainingCenterList = ({ trainingCenters = [], successMessage }) => {
    return (
        <div className="container" style={{ maxWidth: '900px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-bold">Módulo de Centros</span>
                <Link to="/training-center/create" className="btn btn-success btn-sm shadow-sm text-decoration-none" style={{ backgroundColor: '#39A900', border: 'none' }}>
                    ➕ Nuevo Centro de Formación
                </Link>
            </div>

            {/* Alerta de Éxito Opcional */}
            {successMessage && (
                <div className="alert alert-success alert-dismissible fade show shadow-sm border-0 mb-4" role="alert" style={{ borderLeft: '5px solid #39A900' }}>
                    <strong>¡Éxito!</strong> {successMessage}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            {/* Tarjeta con la Tabla */}
            <div className="card shadow border-0">
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">🏢 Listado de Centros de Formación</h4>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: '10%' }}>ID</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '40%' }}>Nombre del Centro</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '25%' }}>Ubicación</th>
                                    <th className="py-3 text-center text-muted fw-bold" style={{ width: '25%' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainingCenters && trainingCenters.length > 0 ? (
                                    trainingCenters.map((center) => (
                                        <tr key={center.id}>
                                            <td className="ps-4 fw-bold text-secondary">{center.id}</td>
                                            <td className="fw-semibold text-dark">{center.name}</td>
                                            <td className="text-secondary">
                                                <i className="fas fa-map-marker-alt text-success me-1"></i> {center.location}
                                            </td>
                                            <td className="pe-4 text-center">
                                                <div className="d-flex gap-2 justify-content-center">
                                                    <Link to={`/training-center/${center.id}`} className="btn btn-primary btn-sm shadow-sm text-decoration-none">
                                                        👁️ Mostrar
                                                    </Link>
                                                    <Link to={`/training-center/${center.id}/edit`} className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none">
                                                        ✏️ Editar
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-5 text-muted">
                                            <i className="fas fa-building fs-2 mb-3 d-block text-secondary"></i>
                                            No hay centros de formación registrados en el sistema.
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

export default TrainingCenterList;