import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba para el módulo de centros de formación
const mockTrainingCenters = [
    { id: 1, name: 'Centro de Comercio y Servicios', location: 'Popayán, Cauca' },
    { id: 2, name: 'Centro de Teleinformática y Producción Industrial', location: 'Popayán, Cauca' },
    { id: 3, name: 'Centro Agropecuario', location: 'Inzá, Cauca' }
];

const TrainingCenterList = ({ trainingCenters = mockTrainingCenters, onDelete, successMessage: propSuccessMessage }) => {
    const [centersList, setCentersList] = useState(trainingCenters);
    const [successMessage, setSuccessMessage] = useState(propSuccessMessage || '');

    // Estados para los modales interactivos
    const [viewCenter, setViewCenter] = useState(null); // Para "Mostrar"
    const [editCenter, setEditCenter] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este centro de formación?')) {
            setCentersList(centersList.filter(center => center.id !== id));
            setSuccessMessage('Centro de formación eliminado exitosamente.');
            if (onDelete) onDelete(id);
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar Edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setCentersList(centersList.map(c => c.id === editCenter.id ? editCenter : c));
        setEditCenter(null);
        setSuccessMessage('Centro de formación actualizado exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[900px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold">Módulo de Centros</span>
                <Link
                    to="/TrainingCenterRegister"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    ➕ Nuevo Centro de Formación
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

            {/* Tarjeta con la Tabla */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">🏢 Listado de Centros de Formación</h4>
                </div>

                <div className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[10%]">ID</th>
                                    <th className="py-3 font-bold w-[35%]">Nombre del Centro</th>
                                    <th className="py-3 font-bold w-[25%]">Ubicación</th>
                                    <th className="py-3 text-center font-bold w-[30%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {centersList && centersList.length > 0 ? (
                                    centersList.map((center) => (
                                        <tr key={center.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="pl-6 py-4 font-bold text-gray-600">{center.id}</td>
                                            <td className="py-4 font-bold text-gray-800">{center.name}</td>
                                            <td className="py-4 text-gray-600">
                                                <i className="fas fa-map-marker-alt text-[#39A900] mr-1"></i> {center.location}
                                            </td>
                                            <td className="pr-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center items-center">
                                                    {/* Botón Mostrar */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewCenter(center)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditCenter(center)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(center.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-building text-3xl mb-3 block text-gray-300"></i>
                                            No hay centros de formación registrados en el sistema.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewCenter && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Centro de Formación</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewCenter.id}</p>
                            <p><strong>Nombre:</strong> {viewCenter.name}</p>
                            <p><strong>Ubicación:</strong> {viewCenter.location}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewCenter(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR CENTRO */}
            {editCenter && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Centro de Formación</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Nombre del Centro</label>
                                <input
                                    type="text"
                                    value={editCenter.name}
                                    onChange={(e) => setEditCenter({ ...editCenter, name: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Ubicación</label>
                                <input
                                    type="text"
                                    value={editCenter.location}
                                    onChange={(e) => setEditCenter({ ...editCenter, location: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditCenter(null)}
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

export default TrainingCenterList;