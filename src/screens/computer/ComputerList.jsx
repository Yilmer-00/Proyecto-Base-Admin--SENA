import React from 'react';
import { Link } from 'react-router-dom';

const ComputerList = ({ computers = [], onDelete, successMessage }) => {
    return (
        <div className="container" style={{ maxWidth: '900px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-bold">Módulo de Inventario PC</span>
                <Link to="/ComputerRegister" className="btn btn-success btn-sm shadow-sm text-decoration-none" style={{ backgroundColor: '#39A900', border: 'none' }}>
                    ➕ Registrar Computador
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
                
                {/* Encabezado con el Verde SENA */}
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">💻 Listado de Computadores</h4>
                </div>

                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: '10%' }}>ID</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '35%' }}>Número de PC</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '30%' }}>Marca</th>
                                    <th className="py-3 text-center text-muted fw-bold" style={{ width: '25%' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {computers && computers.length > 0 ? (
                                    computers.map((computer) => (
                                        <tr key={computer.id}>
                                            <td className="ps-4 fw-bold text-secondary">{computer.id}</td>
                                            <td className="fw-semibold text-dark">{computer.number}</td>
                                            <td className="text-secondary">{computer.brand}</td>
                                            <td className="pe-4 text-center">
                                                <div className="d-flex gap-2 justify-content-center align-items-center">

                                                    {/* Botón Mostrar */}
                                                    <Link to={`/computer/${computer.id}`} className="btn btn-primary btn-sm shadow-sm text-decoration-none">
                                                        Mostrar
                                                    </Link>

                                                    {/* Botón Editar */}
                                                    <Link to={`/computer/${computer.id}/edit`} className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none">
                                                        Editar
                                                    </Link>

                                                    {/* Botón Eliminar */}
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger btn-sm shadow-sm"
                                                        onClick={() => {
                                                            if (window.confirm('¿Estás seguro de que deseas eliminar este computador?')) {
                                                                if (onDelete) onDelete(computer.id);
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
                                        <td colSpan="4" className="text-center py-5 text-muted">
                                            <i className="fas fa-laptop fs-2 mb-3 d-block text-secondary"></i>
                                            No hay computadores registrados en el inventario.
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

export default ComputerList;