import  { useState } from 'react';

// Datos de prueba basados en tu referencia
const defaultApprentices = [
    { id: 1, name: 'Juan David Muñoz', email: 'juan.munoz@soy.sena.edu.co', cell_number: '3104567890', course: { course_number: '3223899' }, computer: { brand: 'HP' } },
    { id: 2, name: 'Laura Sofía Rojas', email: 'laura.rojas@soy.sena.edu.co', cell_number: '3115678901', course: { course_number: '3223899' }, computer: { brand: 'HP' } },
    { id: 3, name: 'Santiago Gómez', email: 'santiago.gomez@soy.sena.edu.co', cell_number: '3126789012', course: { course_number: '3223899' }, computer: { brand: 'HP' } },
    { id: 4, name: 'Valentina Martínez', email: 'valentina.martinez@soy.sena.edu.co', cell_number: '3137890123', course: { course_number: '3223900' }, computer: { brand: 'Dell' } },
    { id: 5, name: 'Nicolás Herrera', email: 'nicolas.herrera@soy.sena.edu.co', cell_number: '3148901234', course: { course_number: '3223900' }, computer: { brand: 'Dell' } },
    { id: 6, name: 'María José Castro', email: 'maria.castro@soy.sena.edu.co', cell_number: '3159012345', course: { course_number: '3223900' }, computer: { brand: 'Dell' } },
    { id: 7, name: 'Andrés Felipe Ruiz', email: 'andres.ruiz@soy.sena.edu.co', cell_number: '3160123456', course: { course_number: '3223901' }, computer: { brand: 'Lenovo' } },
    { id: 8, name: 'Camila Fernández', email: 'camila.fernandez@soy.sena.edu.co', cell_number: '3171234567', course: { course_number: '3223901' }, computer: { brand: 'Lenovo' } },
    { id: 9, name: 'Sebastián López', email: 'sebastian.lopez@soy.sena.edu.co', cell_number: '3182345678', course: { course_number: '3223901' }, computer: { brand: 'Lenovo' } },
    { id: 10, name: 'Daniela Vargas', email: 'daniela.vargas@soy.sena.edu.co', cell_number: '3193456789', course: { course_number: '3223902' }, computer: { brand: 'Acer' } },
];

const ApprenticeList = ({ apprentices = [] }) => {
    // Estado local para manejar los aprendices (permite eliminar y editar en vivo)
    const [apprenticesList, setApprenticesList] = useState(
        apprentices.length > 0 ? apprentices : defaultApprentices
    );
    const [successMessage, setSuccessMessage] = useState('');

    // Estados para los modales interactivos
    const [viewApprentice, setViewApprentice] = useState(null); // Para "Mostrar"
    const [editApprentice, setEditApprentice] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este aprendiz?')) {
            setApprenticesList(apprenticesList.filter(app => app.id !== id));
            setSuccessMessage('Aprendiz eliminado exitosamente.');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar cambios del formulario de edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setApprenticesList(apprenticesList.map(app => app.id === editApprentice.id ? editApprentice : app));
        setEditApprentice(null);
        setSuccessMessage('Aprendiz actualizado exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Botones de Navegación Rápida */}
            <div className="flex flex-wrap justify-between items-center mb-6">
                <span className="text-gray-500 font-bold">Módulo de Gestión de Aprendices</span>
                <a
                    href="/ApprenticeRegister"
                    className="bg-[#39A900] hover:bg-[#2e8a00] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow-sm transition no-underline flex items-center gap-1"
                >
                    ➕ Registrar Nuevo Aprendiz
                </a>
            </div>

            {/* Alerta de Éxito Opcional */}
            {successMessage && (
                <div className="bg-emerald-50 border-l-4 border-[#39A900] text-emerald-800 p-4 rounded-lg shadow-sm mb-6 flex justify-between items-center">
                    <div>
                        <strong className="font-bold">¡Éxito! </strong>
                        <span>{successMessage}</span>
                    </div>
                </div>
            )}

            {/* Tarjeta con la Tabla */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">

                {/* Encabezado con el Verde SENA */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">🎓 Listado de Aprendices</h4>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-500 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 w-16">ID</th>
                                <th className="px-6 py-3">Nombre</th>
                                <th className="px-6 py-3">Email</th>
                                <th className="px-6 py-3">Celular</th>
                                <th className="px-6 py-3">Curso / Ficha</th>
                                <th className="px-6 py-3">Computador</th>
                                <th className="px-6 py-3 text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {apprenticesList.length > 0 ? (
                                apprenticesList.map((apprentice) => (
                                    <tr key={apprentice.id} className="hover:bg-gray-50 transition">
                                        <td className="px-6 py-4 font-bold text-gray-700">{apprentice.id}</td>
                                        <td className="px-6 py-4 font-semibold text-gray-900">{apprentice.name}</td>
                                        <td className="px-6 py-4 text-gray-500">{apprentice.email}</td>
                                        <td className="px-6 py-4 text-gray-500">{apprentice.cell_number}</td>
                                        <td className="px-6 py-4">
                                            <span className="bg-gray-100 text-gray-800 border border-gray-200 px-2.5 py-1 rounded-md text-xs font-medium">
                                                {apprentice.course?.course_number || 'N/A'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-md text-xs font-medium">
                                                {apprentice.computer?.brand || 'Sin equipo'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <div className="flex gap-2 justify-center items-center">
                                                {/* Botón Mostrar (Abre Modal) */}
                                                <button
                                                    type="button"
                                                    onClick={() => setViewApprentice(apprentice)}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm transition cursor-pointer border-0"
                                                >
                                                    Mostrar
                                                </button>

                                                {/* Botón Editar (Abre Formulario Modal) */}
                                                <button
                                                    type="button"
                                                    onClick={() => setEditApprentice(apprentice)}
                                                    className="bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm transition cursor-pointer border-0"
                                                >
                                                    Editar
                                                </button>

                                                {/* Botón Eliminar */}
                                                <button
                                                    type="button"
                                                    className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm transition cursor-pointer border-0"
                                                    onClick={() => handleDelete(apprentice.id)}
                                                >
                                                    Eliminar
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="text-center py-12 text-gray-400">
                                        <span className="text-3xl mb-2 block">👨‍🎓</span>
                                        No hay aprendices registrados en el sistema.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewApprentice && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">🔍 Detalle del Aprendiz</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewApprentice.id}</p>
                            <p><strong>Nombre:</strong> {viewApprentice.name}</p>
                            <p><strong>Email:</strong> {viewApprentice.email}</p>
                            <p><strong>Celular:</strong> {viewApprentice.cell_number}</p>
                            <p><strong>Curso / Ficha:</strong> {viewApprentice.course?.course_number || 'N/A'}</p>
                            <p><strong>Computador Asignado:</strong> {viewApprentice.computer?.brand || 'Sin equipo'}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewApprentice(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded-lg cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR APRENDIZ */}
            {editApprentice && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">✏️ Editar Aprendiz</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Nombre Completo</label>
                                <input
                                    type="text"
                                    value={editApprentice.name}
                                    onChange={(e) => setEditApprentice({ ...editApprentice, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Correo Electrónico</label>
                                <input
                                    type="email"
                                    value={editApprentice.email}
                                    onChange={(e) => setEditApprentice({ ...editApprentice, email: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Número de Celular</label>
                                <input
                                    type="text"
                                    value={editApprentice.cell_number}
                                    onChange={(e) => setEditApprentice({ ...editApprentice, cell_number: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditApprentice(null)}
                                    className="bg-gray-400 hover:bg-gray-500 text-white text-xs px-4 py-2 rounded-lg cursor-pointer border-0 font-medium"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="submit"
                                    className="bg-[#39A900] hover:bg-[#329400] text-white text-xs px-4 py-2 rounded-lg cursor-pointer border-0 font-bold"
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

export default ApprenticeList;