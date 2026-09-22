import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba basados en el ejemplo
const mockAreas = [
    { id: 1, name: 'Análisis y Desarrollo de Software' },
    { id: 2, name: 'Redes y Telecomunicaciones' },
    { id: 3, name: 'Mecánica Industrial' },
    { id: 4, name: 'Contabilidad y Finanzas' },
    { id: 5, name: 'Salud Ocupacional' }
];

const AreaList = ({ areas = mockAreas }) => {
    // Estado local para gestionar las áreas (permite eliminar y editar en tiempo real)
    const [areasList, setAreasList] = useState(areas);
    const [successMessage, setSuccessMessage] = useState('');

    // Estados para los modales interactivos
    const [viewArea, setViewArea] = useState(null); // Para "Mostrar"
    const [editArea, setEditArea] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta área?')) {
            setAreasList(areasList.filter(area => area.id !== id));
            setSuccessMessage('Área eliminada exitosamente.');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar cambios del formulario de edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setAreasList(areasList.map(area => area.id === editArea.id ? editArea : area));
        setEditArea(null);
        setSuccessMessage('Área actualizada exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[900px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold">Módulo de Áreas</span>
                {/* Botón para ir al formulario de creación */}
                <Link
                    to="/AreaRegister"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    ➕ Registrar Nueva Área
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

                {/* Encabezado de la Tarjeta */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">📋 Listado de Áreas Registradas</h4>
                </div>

                <div className="p-0">
                    {/* Tabla Responsiva */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[10%]">ID</th>
                                    <th className="py-3 font-bold w-[60%]">Nombre del Área</th>
                                    <th className="py-3 text-center font-bold w-[30%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {areasList && areasList.length > 0 ? (
                                    areasList.map((area) => (
                                        <tr key={area.id} className="hover:bg-gray-50 transition-colors">
                                            {/* ID del Área */}
                                            <td className="pl-6 py-4 font-bold text-gray-600">
                                                {area.id}
                                            </td>

                                            {/* Nombre del Área */}
                                            <td className="py-4 font-semibold text-gray-800">
                                                {area.name}
                                            </td>

                                            {/* Botones de Acciones */}
                                            <td className="pr-6 py-4">
                                                <div className="flex gap-2 justify-center items-center">

                                                    {/* Botón Mostrar (Abre Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewArea(area)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar (Abre Modal de Edición) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditArea(area)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(area.id)}
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
                                        <td colSpan="3" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-folder-open text-3xl mb-3 block text-gray-300"></i>
                                            No hay áreas registradas en el sistema.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewArea && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Área</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewArea.id}</p>
                            <p><strong>Nombre del Área:</strong> {viewArea.name}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewArea(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR ÁREA */}
            {editArea && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Área</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Nombre del Área</label>
                                <input
                                    type="text"
                                    value={editArea.name}
                                    onChange={(e) => setEditArea({ ...editArea, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditArea(null)}
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

export default AreaList;