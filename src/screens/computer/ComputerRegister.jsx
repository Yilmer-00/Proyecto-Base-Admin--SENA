import  { useState } from 'react';
import { Link } from 'react-router-dom';

const ComputerRegister = ({ onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        number: '',
        brand: ''
    });

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(formData);
        }
    };

    return (
        <div className="max-w-[800px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <Link
                    to="/home"
                    className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors no-underline flex items-center gap-1"
                >
                    ← Volver al inicio
                </Link>
                <span className="text-gray-500 font-bold">Módulo de Inventario</span>
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
                        onClick={(e) => e.target.closest('div').remove()}
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Tarjeta del Formulario */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">

                {/* Encabezado con el Verde SENA */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">💻 Registrar Computador</h4>
                </div>

                <div className="p-6 bg-gray-50">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Especificaciones del Equipo */}
                        <h5 className="text-[#39A900] font-semibold text-base mb-4 border-b border-gray-200 pb-2">📋 Especificaciones del Equipo</h5>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* Número del Computador */}
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Número de Computador / Plaqueta:</label>
                                <input
                                    type="text"
                                    name="number"
                                    value={formData.number}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                    placeholder="Ej. COMP-012"
                                    required
                                />
                            </div>

                            {/* Marca (Brand) */}
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Marca (Brand):</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={formData.brand}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                    placeholder="Ej. HP, Lenovo, Dell"
                                    required
                                />
                            </div>
                        </div>

                        {/* Botón de Registro */}
                        <div className="text-right border-t border-gray-200 pt-4">
                            <button
                                type="submit"
                                className="bg-[#39A900] hover:bg-[#329400] text-white font-medium px-4 py-2 rounded shadow transition-colors cursor-pointer border-0"
                            >
                                💾 Guardar Computador
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ComputerRegister;