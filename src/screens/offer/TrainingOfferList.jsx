import { useState } from 'react';
import { Link } from 'react-router-dom';

// Datos de prueba con las ofertas de formación y convocatorias
const mockOffers = [
    {
        id: 1,
        title: 'Análisis y Desarrollo de Software (ADSO)',
        badgeText: 'Convocatoria Abierta',
        code: '2670142',
        availableSlots: 30,
        interested: 120,
        enrolled: 45,
        pendingEvaluation: 18,
        occupationText: '150% (Sobredemandado)'
    },
    {
        id: 2,
        title: 'Gestión de Redes de Datos',
        badgeText: 'Próxima a Cerrar',
        code: '2891105',
        availableSlots: 25,
        interested: 65,
        enrolled: 20,
        pendingEvaluation: 5,
        occupationText: '80%'
    },
    {
        id: 3,
        title: 'Mantenimiento de Equipos de Cómputo',
        badgeText: 'Convocatoria Abierta',
        code: '2834109',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 4,
        title: 'Diseño e Integración de Multimedia',
        badgeText: 'Convocatoria Abierta',
        code: '2590112',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 5,
        title: 'Gestión Administrativa',
        badgeText: 'Convocatoria Abierta',
        code: '2914480',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 6,
        title: 'Técnico en Programación de Software',
        badgeText: 'Convocatoria Abierta',
        code: '2718920',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 8,
        title: 'Tecnólogo en Gestión Empresarial',
        badgeText: 'Convocatoria Abierta',
        code: '2855210',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 9,
        title: 'Control de Calidad en la Industria Alimentaria',
        badgeText: 'Convocatoria Abierta',
        code: '2798011',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 10,
        title: 'Técnico en Animación 3D',
        badgeText: 'Convocatoria Abierta',
        code: '2843910',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 11,
        title: 'Instalación de Redes Eléctricas Residenciales',
        badgeText: 'Convocatoria Abierta',
        code: '2980114',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    },
    {
        id: 12,
        title: 'Contabilización de Operaciones Comerciales',
        badgeText: 'Convocatoria Abierta',
        code: '2812390',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62%'
    }
];

const TrainingOfferList = ({ offers = mockOffers, onDelete, successMessage: propSuccessMessage }) => {
    const [offersList, setOffersList] = useState(offers);
    const [successMessage, setSuccessMessage] = useState(propSuccessMessage || '');

    // Estados para los modales interactivos
    const [viewOffer, setViewOffer] = useState(null); // Para "Mostrar"
    const [editOffer, setEditOffer] = useState(null); // Para "Editar"

    // Función Eliminar
    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar esta oferta de formación?')) {
            setOffersList(offersList.filter(offer => offer.id !== id));
            setSuccessMessage('Oferta de formación eliminada exitosamente.');
            if (onDelete) onDelete(id);
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    // Guardar Edición
    const handleSaveEdit = (e) => {
        e.preventDefault();
        setOffersList(offersList.map(o => o.id === editOffer.id ? editOffer : o));
        setEditOffer(null);
        setSuccessMessage('Oferta de formación actualizada exitosamente.');
        setTimeout(() => setSuccessMessage(''), 3000);
    };

    return (
        <div className="max-w-[1100px] mx-auto mt-[30px] px-4">

            {/* Botones de Navegación Rápida */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-bold">Módulo de Ofertas y Convocatorias</span>
                <Link
                    to="/offersRegistre"
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
                >
                    ➕ Registrar Nueva Oferta
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
                        onClick={() => setSuccessMessage('')}
                    >
                        &times;
                    </button>
                </div>
            )}

            {/* Tarjeta con la Tabla */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
                <div className="bg-[#39A900] text-white px-6 py-4">
                    <h4 className="text-lg font-bold m-0">📋 Listado de Ofertas de Formación</h4>
                </div>

                <div className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse align-middle">
                            <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                                <tr>
                                    <th className="pl-6 py-3 font-bold w-[8%]">ID</th>
                                    <th className="py-3 font-bold w-[28%]">Título del Programa</th>
                                    <th className="py-3 font-bold w-[15%]">Código / Ficha</th>
                                    <th className="py-3 font-bold w-[14%]">Cupos</th>
                                    <th className="py-3 font-bold w-[15%]">Estado</th>
                                    <th className="py-3 text-center font-bold w-[20%] pr-6">Acciones</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {offersList && offersList.length > 0 ? (
                                    offersList.map((offer) => (
                                        <tr key={offer.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="pl-6 py-4 font-bold text-gray-600">{offer.id}</td>
                                            <td className="py-4 font-bold text-gray-800">{offer.title}</td>
                                            <td className="py-4 text-gray-600">
                                                <span className="bg-gray-100 border border-gray-300 px-2.5 py-1 rounded text-xs font-semibold">
                                                    {offer.code}
                                                </span>
                                            </td>
                                            <td className="py-4 font-semibold text-gray-700">{offer.availableSlots}</td>
                                            <td className="py-4">
                                                <span className="bg-green-50 text-green-700 border border-green-200 px-2.5 py-1 rounded text-xs font-semibold">
                                                    {offer.badgeText}
                                                </span>
                                            </td>
                                            <td className="pr-6 py-4 text-center">
                                                <div className="flex gap-2 justify-center items-center">
                                                    {/* Botón Mostrar */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setViewOffer(offer)}
                                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                                                    >
                                                        Mostrar
                                                    </button>

                                                    {/* Botón Editar */}
                                                    <button
                                                        type="button"
                                                        onClick={() => setEditOffer(offer)}
                                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                    >
                                                        Editar
                                                    </button>

                                                    {/* Botón Eliminar */}
                                                    <button
                                                        type="button"
                                                        className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                                                        onClick={() => handleDelete(offer.id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-12 text-gray-400">
                                            <i className="fas fa-bullhorn text-3xl mb-3 block text-gray-300"></i>
                                            No hay ofertas de formación registradas en el sistema.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* MODAL MOSTRAR DETALLES */}
            {viewOffer && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle de la Oferta</h3>
                        <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
                            <p><strong>ID:</strong> {viewOffer.id}</p>
                            <p><strong>Título:</strong> {viewOffer.title}</p>
                            <p><strong>Código / Ficha:</strong> {viewOffer.code}</p>
                            <p><strong>Cupos Disponibles:</strong> {viewOffer.availableSlots}</p>
                            <p><strong>Interesados:</strong> {viewOffer.interested}</p>
                            <p><strong>Inscritos:</strong> {viewOffer.enrolled}</p>
                            <p><strong>Por Evaluar:</strong> {viewOffer.pendingEvaluation}</p>
                            <p><strong>Estado:</strong> {viewOffer.badgeText}</p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                onClick={() => setViewOffer(null)}
                                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL EDITAR OFERTA */}
            {editOffer && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Oferta de Formación</h3>
                        <form onSubmit={handleSaveEdit}>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Título del Programa</label>
                                <input
                                    type="text"
                                    value={editOffer.title}
                                    onChange={(e) => setEditOffer({ ...editOffer, title: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Código o Ficha</label>
                                <input
                                    type="text"
                                    value={editOffer.code}
                                    onChange={(e) => setEditOffer({ ...editOffer, code: e.target.value })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-xs font-bold text-gray-500 mb-1">Cupos Disponibles</label>
                                <input
                                    type="number"
                                    value={editOffer.availableSlots}
                                    onChange={(e) => setEditOffer({ ...editOffer, availableSlots: Number(e.target.value) })}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                                    required
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditOffer(null)}
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

export default TrainingOfferList;