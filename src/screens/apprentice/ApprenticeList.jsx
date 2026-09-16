import React from 'react';

const ApprenticeList = ({ apprentices = [], onDelete, successMessage }) => {
    return (
        <div className="container" style={{ maxWidth: '1100px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-bold">Módulo de Gestión de Aprendices</span>
                <a href="/apprentice/registro" className="btn btn-success btn-sm shadow-sm text-decoration-none" style={{ backgroundColor: '#39A900', border: 'none' }}>
                    ➕ Registrar Nuevo Aprendiz
                </a>
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
                
                {/* Encabezado con el Verde SENA */}
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">🎓 Listado de Aprendices</h4>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: '8%' }}>ID</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '20%' }}>Nombre</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '20%' }}>Email</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '15%' }}>Celular</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '12%' }}>Curso / Ficha</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '10%' }}>Computador</th>
                                    <th className="pe-4 py-3 text-center text-muted fw-bold" style={{ width: '15%' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {apprentices && apprentices.length > 0 ? (
                                    apprentices.map((apprentice) => (
                                        <tr key={apprentice.id}>
                                            <td className="ps-4 fw-bold text-secondary">{apprentice.id}</td>
                                            <td className="fw-semibold text-dark">{apprentice.name}</td>
                                            <td className="text-secondary">{apprentice.email}</td>
                                            <td className="text-secondary">{apprentice.cell_number}</td>
                                            <td>
                                                <span className="badge bg-light text-dark border">
                                                    {apprentice.course?.course_number || 'N/A'}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="badge bg-light text-success border border-success">
                                                    {apprentice.computer?.brand || 'Sin equipo'}
                                                </span>
                                            </td>
                                            <td className="pe-4 text-center">
                                                <div className="d-flex gap-2 justify-content-center align-items-center">

                                                    {/* Botón Mostrar */}
                                                    <a href={`/apprentice/${apprentice.id}`} className="btn btn-primary btn-sm shadow-sm text-decoration-none">
                                                        Mostrar
                                                    </a>

                                                    {/* Botón Editar */}
                                                    <a href={`/apprentice/${apprentice.id}/edit`} className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none">
                                                        Editar
                                                    </a>

                                                    {/* Botón Eliminar */}
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger btn-sm shadow-sm"
                                                        onClick={() => {
                                                            if (window.confirm('¿Estás seguro de que deseas eliminar este aprendiz?')) {
                                                                if (onDelete) onDelete(apprentice.id);
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
                                    /* Mensaje si la tabla está vacía */
                                    <tr>
                                        <td colSpan="7" className="text-center py-5 text-muted">
                                            <span className="fs-2 mb-2 d-block">👨‍🎓</span>
                                            No hay aprendices registrados en el sistema.
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

export default ApprenticeList;