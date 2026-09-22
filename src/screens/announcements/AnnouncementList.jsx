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

const AnnouncementList = ({ announcements = mockAnnouncements, onDelete, successMessage }) => {
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
                        onClick={(e) => e.target.closest('div').remove()}
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
                                {announcements && announcements.length > 0 ? (
                                    announcements.map((announcement) => (
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
                                                    {/* Botón Editar */}
                                                    <Link
                                                        to={`/announcements/${announcement.id}/edit`}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors no-underline"
                                                    >
                                                        Editar
                                                    </Link>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => {
                                                            if (window.confirm('¿Seguro que deseas eliminar este anuncio?')) {
                                                                if (onDelete) onDelete(announcement.id);
                                                            }
                                                        }}
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
        </div>
    );
};

export default AnnouncementList;