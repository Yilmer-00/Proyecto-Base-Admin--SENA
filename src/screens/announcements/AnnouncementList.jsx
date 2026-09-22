import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba para el módulo de anuncios del carrusel
const mockAnnouncements = [
    {
        id: 1,
        order: 1,
        badge_text: '📢 NOVEDAD',
        badge_class: 'bg-green-100 text-green-800 border border-green-300',
        title: '¡Nuevo Módulo de Inventario Disponible!',
        is_active: true
    },
    {
        id: 2,
        order: 2,
        badge_text: '⚠️ IMPORTANTE',
        badge_class: 'bg-amber-100 text-amber-800 border border-amber-300',
        title: 'Mantenimiento programado de equipos de cómputo',
        is_active: true
    },
    {
        id: 3,
        order: 3,
        badge_text: '📌 AVISO',
        badge_class: 'bg-blue-100 text-blue-800 border border-blue-300',
        title: 'Actualización de datos en el perfil de instructores',
        is_active: false
    }
];

const AnnouncementList = ({ announcements = mockAnnouncements, onDelete, successMessage: propSuccessMessage }) => {
    const [announcementsList, setAnnouncementsList] = useState(announcements);
    const [successMessage, setSuccessMessage] = useState(propSuccessMessage || '');

    // Estados para los modales interactivos
    const [viewAnnouncement, setViewAnnouncement] = useState(null); // Para "Mostrar"
    const [editAnnouncement, setEditAnnouncement] = useState(null); // Para "Editar"

    // 1. Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Seguro que deseas eliminar este anuncio?')) {
            setAnnouncementsList(announcementsList.filter(announcement => announcement.id !== id));
            setSuccessMessage('Anuncio eliminado exitosamente.');
            if (onDelete) onDelete(id);
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // 2. Guardar Edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setAnnouncementsList(announcementsList.map(a => a.id === editAnnouncement.id ? editAnnouncement : a));
        setEditAnnouncement(null);
        setSuccessMessage('Anuncio actualizado exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[1050px] mx-auto mt-[30px] px-4">

            {/* Cabecera y Botón de Creación */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 m-0">Gestión de Anuncios del Carrusel</h2>
                <Link
                    to="/announcements"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-4 py-2 rounded-full shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    + Nuevo Anuncio
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
                <div className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-900 text-white uppercase text-xs tracking-wider">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[10%]">Orden</th>
                                    <th className="py-3 font-bold w-[25%]">Insignia</th>
                                    <th className="py-3 font-bold w-[35%]">Título</th>
                                    <th className="py-3 font-bold w-[15%]">Estado</th>
                                    <th className="py-3 text-center font-bold w-[15%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {announcementsList && announcementsList.length > 0 ? (
                                    announcementsList.map((announcement) => (
                                        <tr key={announcement.id} className="hover:bg-gray-50 transition-colors">
                                            {/* Orden */}
                                            <td className="pl-6 py-4 font-bold text-gray-600">
                                                {announcement.order}
                                            </td>

                                            {/* Insignia */}
                                            <td className="py-4">
                                                <span className={`px-2.5 py-1 rounded text-xs font-semibold inline-block ${announcement.badge_class}`}>
                                                    {announcement.badge_text}
                                                </span>
                                            </td>

                                            {/* Título */}
                                            <td className="py-4 font-bold text-gray-800">
                                                {announcement.title}
                                            </td>

                                            {/* Estado */}
                                            <td className="py-4">
                                                {announcement.is_active ? (
                                                    <span className="bg-green-100 text-green-800 px-2.5 py-1 rounded text-xs font-semibold inline-block">
                                                        Activo
                                                    </span>
                                                ) : (
                                                    <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded text-xs font-semibold inline-block">
                                                        Inactivo
                                                    </span>
                                                )}
                                            </td>

                                            {/* Acciones */}
                                            <td className="pr-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center items-center">
                                                    {/* Botón Mostrar (Abre Modal) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewAnnouncement(announcement)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar (Abre Modal de Edición) */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditAnnouncement(announcement)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(announcement.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    /* Mensaje si no hay anuncios */
                                    <tr>
                                        <td colSpan="5" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-bullhorn text-3xl mb-3 block text-gray-300"></i>
                                            No hay anuncios creados.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewAnnouncement && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Anuncio</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewAnnouncement.id}</p>
                            <p><strong>Orden:</strong> {viewAnnouncement.order}</p>
                            <p><strong>Insignia:</strong> {viewAnnouncement.badge_text}</p>
                            <p><strong>Título:</strong> {viewAnnouncement.title}</p>
                            <p><strong>Estado:</strong> {viewAnnouncement.is_active ? 'Activo' : 'Inactivo'}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewAnnouncement(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR ANUNCIO */}
            {editAnnouncement && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Anuncio</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Orden</label>
                                <input
                                    type="number"
                                    value={editAnnouncement.order}
                                    onChange={(e) => setEditAnnouncement({ ...editAnnouncement, order: Number(e.target.value) })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Texto de la Insignia (Badge)</label>
                                <input
                                    type="text"
                                    value={editAnnouncement.badge_text}
                                    onChange={(e) => setEditAnnouncement({ ...editAnnouncement, badge_text: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Título del Anuncio</label>
                                <input
                                    type="text"
                                    value={editAnnouncement.title}
                                    onChange={(e) => setEditAnnouncement({ ...editAnnouncement, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="is_active_check"
                                    checked={editAnnouncement.is_active}
                                    onChange={(e) => setEditAnnouncement({ ...editAnnouncement, is_active: e.target.checked })}
                                    className="w-4 h-4 text-[#39A900] focus:ring-[#39A900] border-gray-300 rounded cursor-pointer"
                                />
                                <label htmlFor="is_active_check" className="text-xs font-bold text-gray-700 cursor-pointer">
                                    Anuncio Activo
                                </label>
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditAnnouncement(null)}
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

export default AnnouncementList;