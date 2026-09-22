import { useState } from 'react';
import { Link } from 'react-router-dom';

const ApprenticeRegister = ({ courses = [], computers = [], onSubmit, successMessage }) => {
    // Estado para los campos del formulario
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        cell_number: '',
        course_id: '',
        computer_id: ''
    });

    // Actualizar el estado conforme el usuario escribe o selecciona
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
        <div className="max-w-3xl mx-auto px-4 py-8 font-sans">

            {/* Botones de Acción Rápida */}
            <div className="flex justify-between items-center mb-6">
                <Link to="/home" className="bg-gray-600 hover:bg-gray-700 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition no-underline">
                    ← Volver al inicio
                </Link>
                <span className="text-gray-500 font-bold text-sm">Módulo de Aprendices</span>
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

            {/* Tarjeta del Formulario */}
            <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">

                {/* Encabezado con el Verde SENA */}
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">📝 Registrar Nuevo Aprendiz</h4>
                </div>

                <div className="p-6 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Sección: Información Personal */}
                        <div>
                            <h5 className="text-[#39A900] font-bold text-base mb-4 border-b border-gray-100 pb-2">👤 Datos Personales</h5>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Nombre */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Nombre Completo:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#39A900] focus:outline-none shadow-sm"
                                        placeholder="Ej. Juan Pérez"
                                        required
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Correo Electrónico:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#39A900] focus:outline-none shadow-sm"
                                        placeholder="ejemplo@misena.edu.co"
                                        required
                                    />
                                </div>

                                {/* Celular */}
                                <div className="md:col-span-2">
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Número de Celular:</label>
                                    <input
                                        type="text"
                                        name="cell_number"
                                        value={formData.cell_number}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#39A900] focus:outline-none shadow-sm"
                                        placeholder="3001234567"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sección: Asignaciones */}
                        <div>
                            <h5 className="text-[#39A900] font-bold text-base mb-4 border-b border-gray-100 pb-2">🏫 Ficha y Equipamiento</h5>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Curso asignado */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Curso Asignado (Ficha):</label>
                                    <select
                                        name="course_id"
                                        value={formData.course_id}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#39A900] focus:outline-none shadow-sm bg-white"
                                        required
                                    >
                                        <option value="">-- Seleccione Curso --</option>
                                        {courses.map((course) => (
                                            <option key={course.id} value={course.id}>
                                                Ficha: {course.course_number} - {course.day}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Computador asignado */}
                                <div>
                                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Computador Asignado:</label>
                                    <select
                                        name="computer_id"
                                        value={formData.computer_id}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-800 focus:ring-2 focus:ring-[#39A900] focus:outline-none shadow-sm bg-white"
                                        required
                                    >
                                        <option value="">-- Seleccione Computador --</option>
                                        {computers.map((computer) => (
                                            <option key={computer.id} value={computer.id}>
                                                {computer.brand} (N° {computer.number})
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Botón de Envío */}
                        <div className="text-right border-t border-gray-100 pt-4">
                            <button
                                type="submit"
                                className="bg-[#39A900] hover:bg-[#2e8a00] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition text-sm cursor-pointer border-0"
                            >
                                💾 Guardar Aprendiz
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ApprenticeRegister;