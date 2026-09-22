import { useState } from 'react';
import { Link } from 'react-router-dom';

const AreaRegister = ({ onSubmit, successMessage }) => {
    // Estado para el campo del formulario
    const [name, setName] = useState('');

    // Manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({ name });
        }
    };

    return (
        <div className="max-w-[600px] mx-auto mt-[30px] px-4">
            
            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <Link 
                    to="/home" 
                    className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors no-underline flex items-center gap-1"
                >
                    ← Volver al inicio
                </Link>
                <span className="text-gray-500 font-bold">Módulo de Áreas</span>
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
                    <h4 className="text-lg font-bold m-0">➕ Registrar Nueva Área</h4>
                </div>

                <div className="p-6 bg-gray-50">
                    <form onSubmit={handleSubmit}>

                        {/* Sección: Información del Área */}
                        <h5 className="text-[#39A900] font-semibold text-base mb-4 border-b border-gray-200 pb-2">📂 Datos del Área</h5>

                        <div className="mb-4">
                            {/* Nombre del Área */}
                            <label className="block text-sm font-bold text-gray-500 mb-2">Nombre del Área:</label>
                            <input 
                                type="text" 
                                name="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white" 
                                placeholder="Ej. Análisis y Desarrollo de Software" 
                                required 
                            />
                        </div>

                        {/* Botón de Registro */}
                        <div className="text-right border-t border-gray-200 pt-4">
                            <button 
                                type="submit" 
                                className="bg-[#39A900] hover:bg-[#329400] text-white font-medium px-4 py-2 rounded shadow transition-colors cursor-pointer border-0"
                            >
                                💾 Guardar Área
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AreaRegister;