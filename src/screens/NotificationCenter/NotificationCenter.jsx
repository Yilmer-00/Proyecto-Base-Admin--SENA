import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba para el centro de notificaciones
const initialNotifications = [
    {
        id: 1,
        type: 'maintenance',
        data: {
            icon: '🔧',
            badge_text: 'Mantenimiento',
            badge_class: 'bg-amber-500',
            title: 'Mantenimiento preventivo en Sala de Sistemas 3',
            message: 'Se programó revisión de hardware y limpieza de equipos para el bloque B.',
            url: '/computer'
        },
        read_at: null,
        created_at: 'Hace 15 minutos'
    },
    {
        id: 2,
        type: 'computer',
        data: {
            icon: '💻',
            badge_text: 'Préstamo',
            badge_class: 'bg-blue-600',
            title: 'Devolución de portátil pendiente',
            message: 'El instructor <strong>Carlos Alvarado</strong> tiene pendiente la entrega del equipo HP ProBook (Ficha 2711823).',
            url: '/course-teacher'
        },
        read_at: null,
        created_at: 'Hace 2 horas'
    },
    {
        id: 3,
        type: 'server',
        data: {
            icon: '🖥️',
            badge_text: 'Servidores',
            badge_class: 'bg-red-600',
            title: 'Alerta de uso de almacenamiento en Supabase',
            message: 'El servidor de base de datos principal ha alcanzado el 85% de su capacidad estimada.',
            url: null
        },
        read_at: '2026-09-22T10:00:00Z',
        created_at: 'Ayer'
    }
];

const NotificationCenter = () => {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [activeFilter, setActiveFilter] = useState('all');

    // Filtrar notificaciones según el tipo seleccionado
    const filteredNotifications = notifications.filter((notif) => {
        if (activeFilter === 'all') return true;
        return notif.type === activeFilter;
    });

    // Contar notificaciones no leídas
    const unreadCount = notifications.filter((n) => !n.read_at).length;

    // Marcar todas como leídas
    const handleMarkAllAsRead = (e) => {
        e.preventDefault();
        setNotifications(notifications.map(n => ({ ...n, read_at: new Date().toISOString() })));
    };

    // Archivar / Eliminar notificación
    const handleArchive = (id) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    return (
        <div className="max-w-[1000px] mx-auto py-6 px-4">
            
            {/* Encabezado con el Verde SENA */}
            <div className="bg-[#39A900] text-white p-6 rounded-2xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
                <div>
                    <h2 className="text-xl font-bold m-0">🔔 Centro de Alertas y Notificaciones</h2>
                    <p className="text-sm text-green-50 m-0 mt-1">Gestiona los avisos del sistema, mantenimientos y préstamos pendientes.</p>
                </div>
                {unreadCount > 0 && (
                    <button 
                        onClick={handleMarkAllAsRead}
                        className="bg-white hover:bg-gray-100 text-[#39A900] text-xs font-bold px-4 py-2 rounded-full shadow-sm transition-colors cursor-pointer border-0 whitespace-nowrap"
                    >
                        ✓ Marcar todas como leídas
                    </button>
                )}
            </div>

            {/* Filtros Rápidos */}
            <div className="flex flex-wrap gap-2 mb-6">
                <button 
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer ${
                        activeFilter === 'all' 
                            ? 'bg-[#39A900] text-white border-[#39A900]' 
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Todas
                </button>
                <button 
                    onClick={() => setActiveFilter('maintenance')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer ${
                        activeFilter === 'maintenance' 
                            ? 'bg-gray-800 text-white border-gray-800' 
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Mantenimiento
                </button>
                <button 
                    onClick={() => setActiveFilter('computer')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer ${
                        activeFilter === 'computer' 
                            ? 'bg-gray-800 text-white border-gray-800' 
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Equipos / Devoluciones
                </button>
                <button 
                    onClick={() => setActiveFilter('server')}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-colors border cursor-pointer ${
                        activeFilter === 'server' 
                            ? 'bg-gray-800 text-white border-gray-800' 
                            : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                    }`}
                >
                    Servidores
                </button>
            </div>

            {/* Lista de Notificaciones */}
            <div className="space-y-3">
                {filteredNotifications && filteredNotifications.length > 0 ? (
                    filteredNotifications.map((notification) => {
                        // Determinar color del borde izquierdo según la clase
                        const isRead = Boolean(notification.read_at);
                        
                        return (
                            <div 
                                key={notification.id}
                                className={`bg-white border-0 shadow-sm rounded-xl p-4 border-l-4 transition-all ${
                                    isRead ? 'opacity-75 border-l-gray-300' : 'border-l-[#39A900]'
                                }`}
                            >
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                    
                                    {/* Contenido Izquierdo (Icono + Título + Mensaje) */}
                                    <div className="flex items-start gap-3.5">
                                        <div className={`text-white text-lg p-3 rounded-full flex items-center justify-center shrink-0 ${notification.data.badge_class || 'bg-blue-600'}`} style={{ width: '48px', height: '48px' }}>
                                            {notification.data.icon || '🔔'}
                                        </div>
                                        <div>
                                            <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold text-white mb-1 ${notification.data.badge_class || 'bg-blue-600'}`}>
                                                {notification.data.badge_text || 'Aviso'}
                                            </span>
                                            <h6 className="font-bold text-gray-800 text-sm m-0">{notification.data.title}</h6>
                                            <p 
                                                className="text-xs text-gray-500 m-0 mt-1"
                                                dangerouslySetInnerHTML={{ __html: notification.data.message }}
                                            ></p>
                                        </div>
                                    </div>

                                    {/* Contenido Derecho (Fecha + Acciones) */}
                                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                                        <span className="text-[11px] text-gray-400 mb-1">{notification.created_at}</span>
                                        <div className="flex gap-2 items-center">
                                            {notification.data.url && (
                                                <Link 
                                                    to={notification.data.url} 
                                                    className="border border-blue-600 text-blue-600 hover:bg-blue-50 text-xs font-medium px-3 py-1 rounded-full no-underline transition-colors"
                                                >
                                                    Ver Detalle
                                                </Link>
                                            )}
                                            <button 
                                                onClick={() => handleArchive(notification.id)}
                                                className="border border-gray-300 text-gray-600 hover:bg-gray-50 text-xs font-medium px-3 py-1 rounded-full cursor-pointer transition-colors bg-transparent"
                                            >
                                                Archivar
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-100">
                        <i className="fas fa-bell-slash text-3xl text-gray-300 mb-2 block"></i>
                        <p className="text-sm text-gray-400 m-0">No tienes notificaciones registradas en este filtro.</p>
                    </div>
                )}
            </div>

            {/* Botón Ir al Home */}
            <div className="mt-6">
                <Link 
                    to="/home" 
                    className="inline-block bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-colors no-underline"
                >
                    Ir al home
                </Link>
            </div>

        </div>
    );
};

export default NotificationCenter;