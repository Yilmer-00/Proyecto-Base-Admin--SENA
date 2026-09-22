import { useState } from 'react';
import { Link } from 'react-router-dom';

const AnnouncementRegister = ({ onSubmit, successMessage }) => {
    // Estado inicial con datos de prueba realistas para AdminSENA
    const [formData, setFormData] = useState({
        title: '¡Nuevo Módulo de Inventario Disponible!',
        description: 'Ya se encuentra habilitado el registro y control de computadores para todos los centros de formación.',
        badge_text: '📢 NOVEDAD',
        badge_class: 'bg-success',
        button_text: 'Ver Módulo',
        button_url: '/computer',
        order: 1,
        is_active: true
    });

    // Manejar cambios en los inputs, selects y checkboxes
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
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
                    to="/AnnouncementList"
                    className="bg-gray-500 hover:bg-gray-600 text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors no-underline flex items-center gap-1"
                >
                    ← Volver al listado
                </Link>
                <span className="text-gray-500 font-bold">Módulo de Anuncios</span>
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
                    <h4 className="text-lg font-bold m-0">📢 Crear Nuevo Anuncio</h4>
                </div>

                <div className="p-6 bg-gray-50">
                    <form onSubmit={handleSubmit}>

                        {/* Campo: Título */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-500 mb-2">Título:</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                placeholder="Ej: ¡Nuevo Módulo Disponible!"
                                required
                            />
                        </div>

                        {/* Campo: Descripción */}
                        <div className="mb-4">
                            <label className="block text-sm font-bold text-gray-500 mb-2">Descripción:</label>
                            <textarea
                                name="description"
                                rows="3"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                placeholder="Detalle del anuncio..."
                                required
                            ></textarea>
                        </div>

                        {/* Fila: Insignia (Badge) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Texto de la Insignia (Badge):</label>
                                <input
                                    type="text"
                                    name="badge_text"
                                    value={formData.badge_text}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                    placeholder="Ej: 📢 NOVEDAD"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Estilo de Insignia (Clase CSS):</label>
                                <select
                                    name="badge_class"
                                    value={formData.badge_class}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                >
                                    <option value="bg-success">Verde (bg-success)</option>
                                    <option value="bg-warning text-dark">Amarillo (bg-warning)</option>
                                    <option value="bg-info text-dark">Azul Claro (bg-info)</option>
                                    <option value="bg-danger">Rojo (bg-danger)</option>
                                </select>
                            </div>
                        </div>

                        {/* Fila: Botón Opcional */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Texto del Botón (Opcional):</label>
                                <input
                                    type="text"
                                    name="button_text"
                                    value={formData.button_text}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                    placeholder="Ej: Ver Módulo"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">URL del Botón (Opcional):</label>
                                <input
                                    type="text"
                                    name="button_url"
                                    value={formData.button_url}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                    placeholder="Ej: /computer"
                                />
                            </div>
                        </div>

                        {/* Fila: Orden y Switch de Activo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-500 mb-2">Orden de aparición:</label>
                                <input
                                    type="number"
                                    name="order"
                                    value={formData.order}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent text-gray-800 bg-white"
                                />
                            </div>
                            <div className="flex items-center pt-6">
                                <label className="relative flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        name="is_active"
                                        id="is_active"
                                        checked={formData.is_active}
                                        onChange={handleChange}
                                        className="sr-only peer"
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#39A900]"></div>
                                    <span className="ml-3 text-sm font-bold text-gray-700">Anuncio Activo</span>
                                </label>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex justify-end gap-2 border-t border-gray-200 pt-4">
                            <Link
                                to="/announcements"
                                className="bg-gray-500 hover:bg-gray-600 text-white font-medium px-4 py-2 rounded shadow transition-colors no-underline text-sm flex items-center"
                            >
                                Cancelar
                            </Link>
                            <button
                                type="submit"
                                className="bg-[#39A900] hover:bg-[#329400] text-white font-medium px-4 py-2 rounded shadow transition-colors cursor-pointer border-0 text-sm"
                            >
                                💾 Guardar Anuncio
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementRegister;