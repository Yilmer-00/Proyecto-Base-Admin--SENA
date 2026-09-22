import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba para el inventario de computadores
const mockComputers = [
    { id: 1, number: 'COMP-001', brand: 'HP ProDesk' },
    { id: 2, number: 'COMP-002', brand: 'Lenovo ThinkCentre' },
    { id: 3, number: 'COMP-003', brand: 'Dell OptiPlex' },
    { id: 4, number: 'COMP-004', brand: 'HP EliteOne' },
    { id: 5, number: 'COMP-005', brand: 'Asus ExpertCenter' }
];

const ComputerList = ({ computers = mockComputers }) => {
    // Estado local para manejar el listado (permite eliminar y editar al instante)
    const [computersList, setComputersList] = useState(computers);
    const [successMessage, setSuccessMessage] = useState('');

    // Estados para los modales interactivos
    const [viewComputer, setViewComputer] = useState(null); // Para "Mostrar"
    const [editComputer, setEditComputer] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este computador?')) {
            setComputersList(computersList.filter(comp => comp.id !== id));
            setSuccessMessage('Computador eliminado exitosamente.');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar cambios del formulario de edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setComputersList(computersList.map(comp => comp.id === editComputer.id ? editComputer : comp));
        setEditComputer(null);
        setSuccessMessage('Computador actualizado exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[900px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold">Módulo de Inventario PC</span>
                <Link
                    to="/ComputerRegister"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    ➕ Registrar Computador
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

                {/* Encabezado con el Verde SENA */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">💻 Listado de Computadores</h4>
                </div>

                <div className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[10%]">ID</th>
                                    <th className="py-3 font-bold w-[35%]">Número de PC</th>
                                    <th className="py-3 font-bold w-[30%]">Marca</th>
                                    <th className="py-3 text-center font-bold w-[25%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {computersList && computersList.length > 0 ? (
                                    computersList.map((computer) => (
                                        <tr key={computer.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="pl-6 py-4 font-bold text-gray-600">{computer.id}</td>
                                            <td className="py-4 font-semibold text-gray-800">{computer.number}</td>
                                            <td className="py-4 text-gray-600">{computer.brand}</td>
                                            <td className="pr-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center items-center">

                                                    {/* Botón Mostrar (Abre Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewComputer(computer)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar (Abre Formulario Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditComputer(computer)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(computer.id)}
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
                                        <td colSpan="4" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-laptop text-3xl mb-3 block text-gray-300"></i>
                                            No hay computadores registrados en el inventario.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewComputer && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Computador</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewComputer.id}</p>
                            <p><strong>Número de PC:</strong> {viewComputer.number}</p>
                            <p><strong>Marca:</strong> {viewComputer.brand}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewComputer(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR COMPUTADOR */}
            {editComputer && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Computador</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Número de PC</label>
                                <input
                                    type="text"
                                    value={editComputer.number}
                                    onChange={(e) => setEditComputer({ ...editComputer, number: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Marca</label>
                                <input
                                    type="text"
                                    value={editComputer.brand}
                                    onChange={(e) => setEditComputer({ ...editComputer, brand: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditComputer(null)}
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

export default ComputerList;