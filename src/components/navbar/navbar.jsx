import { useState } from 'react';

const Navbar = ({ user, onLogout }) => {
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil (hamburguesa)
    const [activeDropdown, setActiveDropdown] = useState(null); // Controla qué menú desplegable está abierto en PC

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className="bg-[#39A900] text-white shadow-md relative z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* LOGO */}
                    <a href="/home" className="flex items-center gap-2 text-white font-bold text-lg no-underline">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM-jtaxKYljPzx7-TEn-u8MQWRjFmSUTMIrZAYLFB4ZfIHjBOlRQPlGA&s=10"
                            alt="Logo"
                            className="w-10 h-10 rounded-md object-cover"
                        />
                        <span>AdminSENA</span>
                    </a>

                    {/* MENÚ DE ESCRITORIO */}
                    <div className="hidden lg:flex items-center space-x-2">

                        {/* 1. Ingresar Datos */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('ingresar')}
                                className="text-white/80 hover:text-white hover:bg-emerald-700/60 px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1 cursor-pointer"
                            >
                                Ingresar Datos ▾
                            </button>
                            {activeDropdown === 'ingresar' && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                                    <li><a href="/AreaRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Área</a></li>
                                    <li><a href="/ApprenticeRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Aprendices</a></li>
                                    <li><a href="/TrainingCenterRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Centro de estudio</a></li>
                                    <li><a href="/ComputerRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Nuevo Equipo</a></li>
                                    <li><a href="/TeacherRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Instructores</a></li>
                                    <li><a href="/CourseRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Curso</a></li>
                                    <li><a href="/CourseTeacherRegister" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Asignar</a></li>
                                </ul>
                            )}
                        </div>

                        {/* 2. Ajustes del sistema */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('ajustes')}
                                className="text-white/80 hover:text-white hover:bg-emerald-700/60 px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1 cursor-pointer"
                            >
                                Ajustes del sistema ▾
                            </button>
                            {activeDropdown === 'ajustes' && (
                                <ul className="absolute left-0 mt-2 w-52 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                                    <li><a href="/AnnouncementList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Anuncios</a></li>
                                </ul>
                            )}
                        </div>

                        {/* 3. Administración */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('admin')}
                                className="text-white/80 hover:text-white hover:bg-emerald-700/60 px-3 py-2 rounded-md text-sm font-medium transition flex items-center gap-1 cursor-pointer"
                            >
                                Administración ▾
                            </button>
                            {activeDropdown === 'admin' && (
                                <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                                    <li><a href="/AreaList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Áreas</a></li>
                                    <li><a href="/ComputerList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Equipos</a></li>
                                    <li><a href="/TeacherList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Instructores</a></li>
                                    <li><a href="/CourseList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Cursos</a></li>
                                    <li><a href="/CourseTeacherList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Instructores en Curso</a></li>
                                    <li><a href="/TrainingCenterList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Centro de estudio</a></li>
                                    <li><a href="/ApprenticeList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de Aprendices</a></li>
                                    <li><a href="/TrainingOfferList" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Gestión de oferta</a></li>

                                    <li><hr className="my-1 border-gray-200" /></li>
                                    <li><a href="/about" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Quiénes Somos</a></li>
                                    <li><a href="/carnet" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Perfil</a></li>
                                </ul>
                            )}
                        </div>

                    </div>

                    {/* LADO DERECHO: NOTIFICACIONES Y USUARIO */}
                    <div className="hidden lg:flex items-center space-x-4">

                        {/* Notificaciones */}
                        <a href="/notifications" className="relative p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition flex items-center justify-center">
                            🔔
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">
                                3
                            </span>
                        </a>

                        {/* Perfil Administrador Dropdown */}
                        <div className="relative">
                            <button
                                onClick={() => toggleDropdown('user')}
                                className="bg-white text-gray-800 font-bold rounded-full px-4 py-1.5 shadow-sm flex items-center gap-2 hover:bg-gray-100 transition cursor-pointer"
                            >
                                <span className="bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">ADMIN</span>
                                <span className="text-sm font-semibold text-gray-900">{user?.name || 'Administrador'}</span>
                            </button>

                            {activeDropdown === 'user' && (
                                <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2 z-50 border border-gray-100">
                                    <div className="px-4 py-2 border-b border-gray-100">
                                        <span className="text-[11px] text-gray-400 block font-normal">Conectado como:</span>
                                        <span className="text-xs font-bold text-gray-700 truncate block">{user?.email || 'admin@sena.edu.co'}</span>
                                    </div>
                                    <a href="/carnet" className="block px-4 py-2 text-sm hover:bg-emerald-50 hover:text-emerald-700">Mi Perfil / Carnet</a>
                                    <div className="border-t border-gray-100 my-1"></div>
                                    <button
                                        onClick={onLogout}
                                        className="w-full text-left px-4 py-2 text-sm text-red-600 font-semibold hover:bg-red-50 cursor-pointer"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>

                    {/* BOTÓN MÓVIL (HAMBURGUESA) */}
                    <div className="flex lg:hidden items-center gap-3">
                        <a href="/notifications" className="relative p-2 rounded-full bg-white/20 text-white text-sm">
                            🔔
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold">3</span>
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none p-2 rounded-md hover:bg-emerald-700 cursor-pointer"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* MENÚ MÓVIL DESPLEGABLE */}
            {isOpen && (
                <div className="lg:hidden bg-emerald-900 px-4 pt-2 pb-5 space-y-2 border-t border-emerald-800 shadow-inner">
                    <div className="text-xs font-bold text-emerald-300 uppercase px-3 pt-2">Ingresar Datos</div>
                    <a href="/AreaRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Área</a>
                    <a href="/ApprenticeRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Aprendices</a>
                    <a href="/TrainingCenterRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Centro de estudio</a>
                    <a href="/ComputerRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Nuevo Equipo</a>
                    <a href="/TeacherRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Instructores</a>
                    <a href="/CourseRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Curso</a>
                    <a href="/CourseTeacherRegister" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Asignar</a>

                    <div className="text-xs font-bold text-emerald-300 uppercase px-3 pt-2">Ajustes del Sistema</div>
                    <a href="/announcements" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Anuncios</a>

                    <div className="text-xs font-bold text-emerald-300 uppercase px-3 pt-2">Administración</div>
                    <a href="/AreaList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Áreas</a>
                    <a href="/ComputerList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Equipos</a>
                    <a href="/TeacherList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Instructores</a>
                    <a href="/CourseList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Cursos</a>
                    <a href="/CourseTeacherList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Instructores en Curso</a>
                    <a href="/TrainingCenterList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Centro de estudio</a>
                    <a href="/ApprenticeList" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Gestión de Aprendices</a>
                    <a href="/about" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Quiénes Somos</a>
                    <a href="/carnet" className="block px-3 py-1.5 text-sm text-white/90 hover:bg-emerald-800 rounded">Perfil / Carnet</a>

                    <div className="border-t border-emerald-800 pt-3 mt-3 flex flex-col gap-2">
                        <span className="text-xs text-emerald-300 px-3">Conectado como: {user?.email || 'admin@sena.edu.co'}</span>
                        <button
                            onClick={onLogout}
                            className="w-full text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-2 rounded-md transition cursor-pointer"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;