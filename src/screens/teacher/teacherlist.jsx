import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba para el módulo de instructores
const mockTeachers = [
    {
        id: 1,
        name: 'Ing. Carlos Alvarado',
        email: 'calvarado@sena.edu.co',
        area: { name: 'Análisis y Desarrollo de Software' },
        trainig_center: { name: 'Centro de Comercio y Servicios' }
    },
    {
        id: 2,
        name: 'Dra. María Fernanda López',
        email: 'mlopez@sena.edu.co',
        area: { name: 'Redes y Telecomunicaciones' },
        trainig_center: { name: 'Centro de Teleinformática y Producción Industrial' }
    },
    {
        id: 3,
        name: 'Esp. Andrés Felipe Muñoz',
        email: 'amunoz@sena.edu.co',
        area: { name: 'Contabilidad y Finanzas' },
        trainig_center: { name: 'Centro de Comercio y Servicios' }
    }
];

const TeacherList = ({ teachers = mockTeachers, onDelete, successMessage: propSuccessMessage }) => {
    const [teachersList, setTeachersList] = useState(teachers);
    const [successMessage, setSuccessMessage] = useState(propSuccessMessage || '');

    // Estados para los modales interactivos
    const [viewTeacher, setViewTeacher] = useState(null); // Para "Mostrar"
    const [editTeacher, setEditTeacher] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este profesor?')) {
            setTeachersList(teachersList.filter(teacher => teacher.id !== id));
            setSuccessMessage('Profesor eliminado exitosamente.');
            if (onDelete) onDelete(id);
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar Edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setTeachersList(teachersList.map(t => t.id === editTeacher.id ? editTeacher : t));
        setEditTeacher(null);
        setSuccessMessage('Profesor actualizado exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[1050px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold">Módulo de Instructores</span>
                {/* Botón para registrar un nuevo docente */}
                <Link
                    to="/TeacherRegister"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    ➕ Nuevo Profesor
                </Link>
            </div>

            {/* Alerta de Éxito Opcional */}
            {successMessage && (
                <div className="bg-green-50 text-green-800 p-4 rounded-lg shadow-sm mb-4 border-l-4 border-[#39A900] flex justify-between items-center" role="alert">
                    <div>
                        <strong className="font-bold">¡Éxito! </strong>
                        <span>{successMessage}</span>
                    </div>
                    <button
                        type="button"
                        className="text-green-700 hover:text-green-900 font-bold text-xl leading-none bg-transparent border-0 cursor-pointer"
                        aria-label="Close"
                        onClick={() => setSuccessMessage('')}
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Tarjeta que contiene la Tabla */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">

                {/* Encabezado de la Tarjeta con el Verde SENA */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">👨‍🏫 Listado de Profesores / Instructores</h4>
                </div>

                <div className="p-0">
                    {/* Tabla Responsiva */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[8%]">ID</th>
                                    <th className="py-3 font-bold w-[22%]">Nombre</th>
                                    <th className="py-3 font-bold w-[22%]">Email</th>
                                    <th className="py-3 font-bold w-[15%]">Área</th>
                                    <th className="py-3 font-bold w-[18%]">Centro de Formación</th>
                                    <th className="py-3 text-center font-bold w-[15%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {teachersList && teachersList.length > 0 ? (
                                    teachersList.map((teacher) => (
                                        <tr key={teacher.id} className="hover:bg-gray-50 transition-colors">
                                            {/* ID */}
                                            <td className="pl-6 py-4 font-bold text-gray-600">
                                                {teacher.id}
                                            </td>

                                            {/* Nombre del Docente */}
                                            <td className="py-4 font-bold text-gray-800">
                                                {teacher.name}
                                            </td>

                                            {/* Email */}
                                            <td className="py-4 text-gray-600 text-sm break-all">
                                                <i className="far fa-envelope text-gray-400 mr-1"></i> {teacher.email}
                                            </td>

                                            {/* Área */}
                                            <td className="py-4">
                                                <span className="bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-semibold">
                                                    {teacher.area?.name || 'Sin Área'}
                                                </span>
                                            </td>

                                            {/* Centro de Formación */}
                                            <td className="py-4 text-gray-500 text-sm">
                                                <i className="fas fa-building text-gray-400 mr-1"></i> {teacher.trainig_center?.name || 'Sin Centro'}
                                            </td>

                                            {/* Botones de Acciones */}
                                            <td className="pr-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center items-center">

                                                    {/* Botón Mostrar (Abre Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewTeacher(teacher)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar (Abre Formulario Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditTeacher(teacher)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(teacher.id)}
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
                                        <td colSpan="6" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-user-tie text-3xl mb-3 block text-gray-300"></i>
                                            No hay profesores registrados en el sistema.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewTeacher && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Profesor</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewTeacher.id}</p>
                            <p><strong>Nombre:</strong> {viewTeacher.name}</p>
                            <p><strong>Email:</strong> {viewTeacher.email}</p>
                            <p><strong>Área:</strong> {viewTeacher.area?.name || 'Sin Área'}</p>
                            <p><strong>Centro de Formación:</strong> {viewTeacher.trainig_center?.name || 'Sin Centro'}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewTeacher(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR PROFESOR */}
            {editTeacher && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Profesor</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    value={editTeacher.name}
                                    onChange={(e) => setEditTeacher({ ...editTeacher, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    value={editTeacher.email}
                                    onChange={(e) => setEditTeacher({ ...editTeacher, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditTeacher(null)}
                                    className="bg-gray-400 hover:bg-gray-500 text-white text-xs px-4 py-2 rounded cursor-pointer border-0 font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#39A900] hover:bg-[#329400] text-white text-xs px-4 py-2 rounded cursor-pointer border-0 font-bold"
                                >
                                    Guardar Cambios
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
    );
};

export default TeacherList;