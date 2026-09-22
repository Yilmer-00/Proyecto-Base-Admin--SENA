import { useState } from 'react';

const Carnet = ({ user }) => {
    // Estado para la hora actual simulada del lector de acceso
    const [currentTime, setCurrentTime] = useState(
        new Date().toLocaleTimeString('en-US', { hour12: false })
    );

    // Función para simular la impresión de la página
    const handlePrint = () => {
        window.print();
    };

    // Función para simular un nuevo escaneo de QR y actualizar la hora
    const handleSimulateScan = () => {
        setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
        alert('Simulación: Escaneando nuevo código QR...');
    };

    // Obtener las iniciales para el avatar (ej: "Juan Pérez" -> "JP")
    const getInitials = (name) => {
        if (!name) return 'US';
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .substring(0, 2);
    };

    // Datos por defecto si no se pasa el usuario por props
    const currentUser = user || {
        id: 1,
        name: 'Yilmer Melenge',
        role: 'admin',
        email: 'yilmer@sena.edu.co'
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-8 font-sans">

            {/* Encabezado de la Sección */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                    <h3 className="text-xl font-bold text-gray-800 m-0">🆔 Carnet Digital y Control de Acceso</h3>
                    <p className="text-gray-500 text-sm mt-1">
                        Módulo independiente de identificación y registro mediante código QR.
                    </p>
                </div>

                <button
                    onClick={handlePrint}
                    className="border border-gray-300 hover:bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm transition cursor-pointer"
                >
                    🖨️ Imprimir Carnet
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">

                {/* Tarjeta del Carnet Digital SENA */}
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col">

                        {/* Encabezado Verde SENA */}
                        <div className="p-4 text-white text-center bg-[#39A900]">
                            <span className="bg-white text-emerald-800 font-bold px-3 py-0.5 rounded-full text-[11px] mb-1 inline-block tracking-wide">
                                SERVICIO NACIONAL DE APRENDIZAJE
                            </span>
                            <h5 className="font-bold m-0 uppercase tracking-wider text-lg">
                                Carnet Digital
                            </h5>
                        </div>

                        {/* Cuerpo del Carnet */}
                        <div className="p-6 text-center bg-white flex-grow">

                            {/* Avatar */}
                            <div className="mb-4 relative inline-block">
                                <div className="w-24 h-24 rounded-full bg-gray-50 border-4 border-[#39A900] flex items-center justify-center mx-auto shadow-sm">
                                    <span className="text-2xl font-extrabold text-[#39A900]">
                                        {getInitials(currentUser.name)}
                                    </span>
                                </div>
                            </div>

                            {/* Nombre dinámico */}
                            <h5 className="font-bold text-gray-900 text-lg mb-1">
                                {currentUser.name}
                            </h5>

                            {/* Rol dinámico */}
                            <p className="text-gray-500 text-sm mb-2 capitalize">
                                {currentUser.role}
                            </p>

                            {/* Correo dinámico */}
                            <p className="text-gray-500 text-sm mb-4 truncate px-2">
                                {currentUser.email}
                            </p>

                            {/* Información del usuario */}
                            <div className="flex justify-center gap-2 mb-4 flex-wrap">
                                <span className="bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1 rounded-md text-xs font-semibold">
                                    ID: {currentUser.id}
                                </span>
                                <span className="bg-[#39A900] text-white px-3 py-1 rounded-md text-xs font-semibold capitalize">
                                    {currentUser.role}
                                </span>
                            </div>

                            <hr className="my-4 border-gray-100" />

                            {/* Código QR */}
                            <div className="p-3 bg-gray-50 rounded-xl inline-block border border-gray-200 mb-3 shadow-sm">
                                <img
                                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${currentUser.id}`}
                                    alt="Código QR de Acceso"
                                    className="rounded mx-auto"
                                    style={{ width: '130px', height: '130px' }}
                                />
                            </div>

                            <p className="text-gray-400 text-xs font-semibold mt-1">
                                Usuario: {currentUser.email}
                            </p>

                        </div>

                        {/* Pie del Carnet */}
                        <div className="bg-gray-50 text-center py-3 border-t border-gray-100">
                            <span className="text-gray-400 text-[10px] tracking-wider uppercase font-medium">
                                Regional Cauca | Centro de Comercio y Servicio
                            </span>
                        </div>

                    </div>
                </div>

                {/* Simulador del Lector de Acceso */}
                <div className="w-full max-w-md mx-auto">
                    <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 flex flex-col h-full">

                        <div className="bg-gray-900 text-white p-4">
                            <h6 className="mb-0 font-bold text-sm tracking-wide">
                                📟 Simulador de Punto de Control (Ambientes)
                            </h6>
                        </div>

                        <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                            <div>
                                <p className="text-gray-500 text-sm mb-4">
                                    Este panel simula la pantalla del escáner en la entrada de los laboratorios o aulas de formación.
                                </p>

                                {/* Estado del Acceso */}
                                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6 shadow-sm">
                                    <div className="flex items-center gap-3">
                                        <span className="text-3xl">✅</span>
                                        <div>
                                            <h6 className="font-bold text-emerald-900 text-sm mb-0">ACCESO PERMITIDO</h6>
                                            <span className="text-xs text-emerald-700 font-semibold block mt-0.5">
                                                Ingreso registrado correctamente
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Detalles del Registro */}
                                <ul className="divide-y divide-gray-100 mb-6 text-sm">
                                    <li className="flex justify-between py-2.5">
                                        <span className="text-gray-500">Usuario:</span>
                                        <span className="font-bold text-gray-800">{currentUser.name}</span>
                                    </li>
                                    <li className="flex justify-between py-2.5">
                                        <span className="text-gray-500">Hora de Ingreso:</span>
                                        <span className="font-bold text-gray-800">{currentTime}</span>
                                    </li>
                                    <li className="flex justify-between py-2.5 items-center">
                                        <span className="text-gray-500">Rol:</span>
                                        <span className="bg-[#39A900] text-white text-xs px-2.5 py-1 rounded-md font-semibold capitalize">
                                            {currentUser.role}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 px-4 rounded-xl transition text-sm cursor-pointer shadow-sm"
                                onClick={handleSimulateScan}
                            >
                                🔄 Simular Escaneo Nuevo
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Carnet;