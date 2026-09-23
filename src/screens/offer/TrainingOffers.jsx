import { Link } from 'react-router-dom';

// Datos de prueba con las ofertas de formación y convocatorias
const mockOffers = [
    {
        id: 1,
        title: 'Análisis y Desarrollo de Software (ADSO)',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2670142',
        availableSlots: 30,
        interested: 120,
        enrolled: 45,
        pendingEvaluation: 18,
        occupationText: '150% (Sobredemandado)',
        progressWidth: '100%',
        progressColor: 'bg-green-600'
    },
    {
        id: 2,
        title: 'Gestión de Redes de Datos',
        badgeText: 'Próxima a Cerrar',
        badgeClass: 'bg-amber-400 text-gray-900',
        code: '2891105',
        availableSlots: 25,
        interested: 65,
        enrolled: 20,
        pendingEvaluation: 5,
        occupationText: '80%',
        progressWidth: '80%',
        progressColor: 'bg-cyan-500'
    },
    {
        id: 3,
        title: 'Mantenimiento de Equipos de Cómputo',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2718920',
        availableSlots: 35,
        interested: 85,
        enrolled: 22,
        pendingEvaluation: 8,
        occupationText: '62% (Cupos disponibles)',
        progressWidth: '62%',
        progressColor: 'bg-cyan-500'
    },
    {
        id: 4,
        title: 'Diseño e Integración de Multimedia',
        badgeText: 'Próxima a Cerrar',
        badgeClass: 'bg-amber-400 text-gray-900',
        code: '2834109',
        availableSlots: 25,
        interested: 140,
        enrolled: 38,
        pendingEvaluation: 15,
        occupationText: '152% (Sobredemandado)',
        progressWidth: '100%',
        progressColor: 'bg-red-500'
    },
    {
        id: 5,
        title: 'Gestión Administrativa',
        badgeText: 'En Selección',
        badgeClass: 'bg-gray-200 text-gray-800',
        code: '2590112',
        availableSlots: 30,
        interested: 95,
        enrolled: 30,
        pendingEvaluation: 0,
        occupationText: '100% (Completo)',
        progressWidth: '100%',
        progressColor: 'bg-green-600'
    },
    {
        id: 6,
        title: 'Técnico en Programación de Software',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2914480',
        availableSlots: 35,
        interested: 110,
        enrolled: 32,
        pendingEvaluation: 12,
        occupationText: '91% (Cupos disponibles)',
        progressWidth: '91%',
        progressColor: 'bg-cyan-500'
    },
    {
        id: 7,
        title: 'Tecnólogo en Gestión Empresarial',
        badgeText: 'Próxima a Cerrar',
        badgeClass: 'bg-amber-400 text-gray-900',
        code: '2855210',
        availableSlots: 30,
        interested: 165,
        enrolled: 48,
        pendingEvaluation: 21,
        occupationText: '160% (Sobredemandado)',
        progressWidth: '100%',
        progressColor: 'bg-red-500'
    },
    {
        id: 8,
        title: 'Control de Calidad en la Industria Alimentaria',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2798011',
        availableSlots: 25,
        interested: 50,
        enrolled: 14,
        pendingEvaluation: 3,
        occupationText: '56% (Baja demanda)',
        progressWidth: '56%',
        progressColor: 'bg-amber-500'
    },
    {
        id: 9,
        title: 'Gestión de la Seguridad y Salud en el Trabajo',
        badgeText: 'Próxima a Cerrar',
        badgeClass: 'bg-amber-400 text-gray-900',
        code: '2843910',
        availableSlots: 30,
        interested: 190,
        enrolled: 55,
        pendingEvaluation: 28,
        occupationText: '183% (Alta demanda)',
        progressWidth: '100%',
        progressColor: 'bg-red-500'
    },
    {
        id: 10,
        title: 'Técnico en Animación 3D',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2980114',
        availableSlots: 20,
        interested: 98,
        enrolled: 19,
        pendingEvaluation: 6,
        occupationText: '95% (Casi Lleno)',
        progressWidth: '95%',
        progressColor: 'bg-cyan-500'
    },
    {
        id: 11,
        title: 'Instalación de Redes Eléctricas Residenciales',
        badgeText: 'En Selección',
        badgeClass: 'bg-gray-200 text-gray-800',
        code: '2812390',
        availableSlots: 30,
        interested: 72,
        enrolled: 30,
        pendingEvaluation: 0,
        occupationText: '100% (Completo)',
        progressWidth: '100%',
        progressColor: 'bg-green-600'
    },
    {
        id: 12,
        title: 'Contabilización de Operaciones Comerciales',
        badgeText: 'Convocatoria Abierta',
        badgeClass: 'bg-white text-[#39A900]',
        code: '2950188',
        availableSlots: 35,
        interested: 130,
        enrolled: 29,
        pendingEvaluation: 9,
        occupationText: '82% (Cupos disponibles)',
        progressWidth: '82%',
        progressColor: 'bg-cyan-500'
    }
];

const TrainingOffers = ({ offers = mockOffers }) => {
    return (
        <div className="max-w-[1100px] mx-auto mt-[30px] px-4">

            {/* Encabezado y Acción */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 m-0">📢 Ofertas de Formación y Convocatorias</h3>
                    <p className="text-xs text-gray-500 mt-1">Monitoreo de demanda, aspirantes y estado de selección en tiempo real.</p>
                </div>
                <Link 
                    to="/TrainingOfferRegister" 
                    className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-4 py-2 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline whitespace-nowrap"
                >
                    ➕ Registrar Nueva oferta
                </Link>
            </div>

            {/* Cards de Ofertas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {offers.map((offer) => (
                    <div key={offer.id} className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 flex flex-col justify-between">
                        
                        {/* Cabecera de la Tarjeta */}
                        <div className="bg-[#39A900] text-white px-6 py-4 flex justify-between items-center flex-wrap gap-2">
                            <h5 className="text-base font-bold m-0">{offer.title}</h5>
                            <span className={`px-2.5 py-1 rounded text-xs font-bold ${offer.badgeClass}`}>
                                {offer.badgeText}
                            </span>
                        </div>

                        {/* Cuerpo de la Tarjeta */}
                        <div className="p-6">
                            <p className="text-xs text-gray-500 mb-4">
                                <strong className="text-gray-700">Ficha / Código:</strong> {offer.code} | <strong className="text-gray-700">Cupos disponibles:</strong> {offer.availableSlots}
                            </p>

                            {/* Estadísticas Rápidas */}
                            <div className="grid grid-cols-3 gap-2 text-center mb-4">
                                <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                                    <span className="block text-xl font-bold text-cyan-600">{offer.interested}</span>
                                    <span className="text-[11px] text-gray-500 font-semibold">👀 Interesados</span>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                                    <span className="block text-xl font-bold text-green-600">{offer.enrolled}</span>
                                    <span className="text-[11px] text-gray-500 font-semibold">✍️ Inscritos</span>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-lg border border-gray-200">
                                    <span className="block text-xl font-bold text-amber-500">{offer.pendingEvaluation}</span>
                                    <span className="text-[11px] text-gray-500 font-semibold">⏳ Por Evaluar</span>
                                </div>
                            </div>

                            {/* Barra de Progreso de Cupos */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs text-gray-500 mb-1">
                                    <span>Ocupación de cupos (Inscritos vs Cupos)</span>
                                    <span className="font-bold text-gray-800">{offer.occupationText}</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full ${offer.progressColor}`} 
                                        style={{ width: offer.progressWidth }}
                                    ></div>
                                </div>
                            </div>

                            {/* Botones de Acción de la Card */}
                            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                                <a 
                                    href="#" 
                                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full shadow-sm transition-colors no-underline"
                                >
                                    Ver Métricas
                                </a>
                                {offer.pendingEvaluation > 0 ? (
                                    <a 
                                        href="#" 
                                        className="bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm transition-colors no-underline"
                                    >
                                        Evaluar Aspirantes ({offer.pendingEvaluation})
                                    </a>
                                ) : (
                                    <button 
                                        className="bg-gray-200 text-gray-500 text-xs font-semibold px-3 py-1.5 rounded-full cursor-not-allowed border-0" 
                                        disabled
                                    >
                                        Evaluación Finalizada
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrainingOffers;