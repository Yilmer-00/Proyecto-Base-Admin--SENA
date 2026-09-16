import React from 'react';
import { Link } from 'react-router-dom';

const TeacherList = ({ teachers = [], onDelete, successMessage }) => {
    return (
        <div className="container" style={{ maxWidth: '1050px', marginTop: '30px' }}>

            {/* Botones de Navegación Rápida */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <span className="text-muted fw-bold">Módulo de Instructores</span>
                {/* Botón para registrar un nuevo docente */}
                <Link to="/TeacherRegister" className="btn btn-success btn-sm shadow-sm text-decoration-none" style={{ backgroundColor: '#39A900', border: 'none' }}>
                    ➕ Nuevo Profesor
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
                
                {/* Encabezado de la Tarjeta con el Verde SENA */}
                <div className="card-header text-white py-3" style={{ backgroundColor: '#39A900' }}>
                    <h4 className="mb-0 fw-bold">👨‍🏫 Listado de Profesores / Instructores</h4>
                </div>

                <div className="card-body p-0">
                    {/* Tabla Responsiva */}
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3 text-muted fw-bold" style={{ width: '8%' }}>ID</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '22%' }}>Nombre</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '22%' }}>Email</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '15%' }}>Área</th>
                                    <th className="py-3 text-muted fw-bold" style={{ width: '18%' }}>Centro de Formación</th>
                                    <th className="py-3 text-center text-muted fw-bold" style={{ width: '15%' }}>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {teachers && teachers.length > 0 ? (
                                    teachers.map((teacher) => (
                                        <tr key={teacher.id}>
                                            {/* ID */}
                                            <td className="ps-4 fw-bold text-secondary">
                                                {teacher.id}
                                            </td>

                                            {/* Nombre del Docente */}
                                            <td className="fw-bold text-dark">
                                                {teacher.name}
                                            </td>

                                            {/* Email */}
                                            <td className="text-secondary text-break">
                                                <i className="far fa-envelope text-muted me-1"></i> {teacher.email}
                                            </td>

                                            {/* Área */}
                                            <td className="text-secondary">
                                                <span className="badge bg-success bg-opacity-10 text-success border border-success border-opacity-25 px-2 py-1">
                                                    {teacher.area?.name || 'Sin Área'}
                                                </span>
                                            </td>

                                            {/* Centro de Formación */}
                                            <td className="text-secondary small">
                                                <i className="fas fa-building text-muted me-1"></i> {teacher.trainig_center?.name || 'Sin Centro'}
                                            </td>

                                            {/* Botones de Acciones */}
                                            <td className="pe-4 text-center">
                                                <div className="d-flex gap-2 justify-content-center align-items-center">

                                                    {/* Botón Mostrar */}
                                                    <Link to={`/teacher/${teacher.id}`} className="btn btn-primary btn-sm shadow-sm text-decoration-none">
                                                        Mostrar
                                                    </Link>

                                                    {/* Botón Editar */}
                                                    <Link to={`/teacher/${teacher.id}/edit`} className="btn btn-warning btn-sm text-dark fw-semibold shadow-sm text-decoration-none">
                                                        Editar
                                                    </Link>

                                                    {/* Botón Eliminar */}
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger btn-sm shadow-sm"
                                                        onClick={() => {
                                                            if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
                                                                if (onDelete) onDelete(teacher.id);
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
                                    /* Mensaje por si aún no hay profesores registrados */
                                    <tr>
                                        <td colSpan="6" className="text-center py-5 text-muted">
                                            <i className="fas fa-user-tie fs-2 mb-3 d-block text-secondary"></i>
                                            No hay profesores registrados en el sistema.
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

export default TeacherList;