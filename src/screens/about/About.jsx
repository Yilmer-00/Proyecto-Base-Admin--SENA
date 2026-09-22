import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="max-w-[1100px] mx-auto mt-[30px] mb-[50px] px-4">

            {/* Banner de Encabezado Institucional */}
            <div className="bg-gradient-to-r from-[#39A900] to-[#00324d] text-white rounded-2xl shadow-md p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <span className="inline-block bg-white text-[#39A900] font-mono text-xs px-3.5 py-1.5 mb-3 rounded-full font-bold tracking-wide shadow-sm">
                        CONOCE NUESTRA PLATAFORMA
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold mb-3 tracking-tight">
                        Sobre AdminSena
                    </h1>
                    <p className="text-base md:text-lg opacity-90 leading-relaxed max-w-2xl">
                        Transformando la gestión académica, el control de inventarios y la administración de ambientes de formación.
                    </p>
                </div>
                <div className="text-4xl bg-white/20 p-5 rounded-full flex items-center justify-center shadow-inner shrink-0 w-[85px] h-[85px]">
                    🏛️
                </div>
            </div>

            {/* Sección: Misión y Visión */}
            <h4 className="text-gray-600 font-bold text-xl mb-4 flex items-center gap-2">
                🎯 Propósito Institucional
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

                {/* Misión */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-[6px] border-l-[#39A900] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">🚀</span>
                        <h3 className="text-xl font-bold text-gray-800">Nuestra Misión</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Proporcionar una herramienta integral e intuitiva que optimice el registro y seguimiento de aprendices, instructores, fichas de formación y equipos tecnológicos, garantizando eficiencia y transparencia en los procesos administrativos del centro.
                    </p>
                </div>

                {/* Visión */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 border-l-[6px] border-l-[#00324d] hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl">👁️</span>
                        <h3 className="text-xl font-bold text-gray-800">Nuestra Visión</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        Consolidarse como la plataforma de referencia para la gestión de ambientes de aprendizaje, adaptada a las necesidades tecnológicas del SENA y alineada con los estándares del desarrollo de software moderno.
                    </p>
                </div>

            </div>

            {/* Sección: Cifras e Impacto */}
            <h4 className="text-gray-600 font-bold text-xl mb-4 flex items-center gap-2">
                📈 Impacto del Sistema
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-2">🎒</span>
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-1">100%</h3>
                    <span className="text-gray-500 text-xs font-semibold">Control de Aprendices</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-2">💻</span>
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-1">Real-Time</h3>
                    <span className="text-gray-500 text-xs font-semibold">Seguimiento de Inventario</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-2">👨‍🏫</span>
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-1">Centralizado</h3>
                    <span className="text-gray-500 text-xs font-semibold">Gestión de Instructores</span>
                </div>
                <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm text-center hover:-translate-y-1 transition-transform">
                    <span className="text-4xl block mb-2">⚡</span>
                    <h3 className="text-2xl font-extrabold text-gray-800 mb-1">Optimizados</h3>
                    <span className="text-gray-500 text-xs font-semibold">Tiempos de Respuesta</span>
                </div>
            </div>

            {/* Sección: Valores del Proyecto */}
            <h4 className="text-gray-600 font-bold text-xl mb-4 flex items-center gap-2">
                💡 Nuestros Valores y Principios
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                {/* Valor 1 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl text-[#39A900] mb-2">🌿</div>
                    <h5 className="font-bold text-gray-800 text-lg mb-2">Eficiencia</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Reducción de trámites manuales e interacción directa con los módulos clave de formación.
                    </p>
                </div>

                {/* Valor 2 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl text-[#00324d] mb-2">🔒</div>
                    <h5 className="font-bold text-gray-800 text-lg mb-2">Trazabilidad</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Asignación clara de equipos a aprendices e instructores con datos organizados y seguros.
                    </p>
                </div>

                {/* Valor 3 */}
                <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-all duration-300">
                    <div className="text-3xl text-amber-500 mb-2">🤝</div>
                    <h5 className="font-bold text-gray-800 text-lg mb-2">Trabajo en Equipo</h5>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Desarrollado bajo una visión colaborativa para el beneficio directo de la comunidad SENA.
                    </p>
                </div>

            </div>

            {/* Banner Final de Contacto / Regreso */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-8 text-center">
                <h5 className="text-xl font-bold text-gray-800 mb-2">¿Necesitas regresar al panel de gestión?</h5>
                <p className="text-gray-500 text-sm mb-5">
                    Accede directamente a los módulos principales para administrar el inventario y las fichas.
                </p>
                <div>
                    <Link
                        to="/home"
                        className="inline-block bg-[#39A900] hover:bg-[#329400] text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm transition-colors no-underline text-sm"
                    >
                        Ir al inicio
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default About;