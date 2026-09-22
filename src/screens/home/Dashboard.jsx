import { useState } from 'react';

const announcements = [
  {
    badge: '📢 NOVEDAD DEL SISTEMA',
    badgeStyle: 'bg-emerald-100 text-emerald-800',
    title: '¡Nuevo Módulo de Exportación de Reportes!',
    desc: 'Ahora puedes generar listas completas de computadores e instructores asignados directamente en Excel y PDF.',
    link: '/computers',
    linkText: 'Ver Módulo',
  },
  {
    badge: '⚠️ ATENCIÓN INSTRUCTORES',
    badgeStyle: 'bg-amber-100 text-amber-800',
    title: 'Cierre de Registro de Fichas',
    desc: 'Recuerda verificar que todos los aprendices vinculados a tu formación estén registrados correctamente en el sistema.',
    link: '/courses',
    linkText: 'Revisar Fichas',
  },
  {
    badge: '🔔 MANTENIMIENTO PROGRAMADO',
    badgeStyle: 'bg-sky-100 text-sky-800',
    title: 'Actualización de Servidores',
    desc: 'La plataforma estará en mantenimiento el sábado de 10:00 PM a 2:00 AM para optimización de la base de datos.',
    extraBadge: 'Sábado 10:00 PM',
  },
  {
    badge: '📢 CONVOCATORIAS ABIERTAS',
    badgeStyle: 'bg-amber-100 text-amber-800',
    title: 'Descubre las Ofertas de Formación',
    desc: 'Explora los programas disponibles, consulta estadísticas de aspirantes en tiempo real y monitorea los cupos de cada ficha.',
    link: '/offers',
    linkText: 'Ver Ofertas',
  },
];

export default function Dashboard() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % announcements.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const activeAnnouncement = announcements[currentSlide];

  return (
    <div className="w-full px-4 md:px-8 py-6">
      {/* Banner Flotante / Carrusel de Anuncios */}
      {showAnnouncement && (
        <div className="relative mb-12 bg-gradient-to-r from-emerald-800 to-emerald-950 text-white rounded-2xl shadow-lg overflow-hidden">
          {/* Botón para cerrar/descartar */}
          <button
            type="button"
            onClick={() => setShowAnnouncement(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full focus:outline-none z-10 transition cursor-pointer"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Diapositiva Activa */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[160px]">
            <div className="max-w-3xl">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${activeAnnouncement.badgeStyle}`}>
                {activeAnnouncement.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">
                {activeAnnouncement.title}
              </h3>
              <p className="text-sm md:text-base text-emerald-100/80 mb-0">
                {activeAnnouncement.desc}
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-4">
              {activeAnnouncement.link ? (
                <a
                  href={activeAnnouncement.link}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-full px-5 py-2.5 text-sm font-semibold transition-all hover:scale-105 no-underline"
                >
                  {activeAnnouncement.linkText}
                </a>
              ) : (
                <span className="bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 text-sm">
                  {activeAnnouncement.extraBadge}
                </span>
              )}
            </div>
          </div>

          {/* Controles de navegación y Paginación */}
          <div className="flex items-center justify-between px-6 pb-4 pt-2 border-t border-white/10">
            <div className="flex space-x-2">
              {announcements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40'
                    }`}
                  aria-label={`Ir al anuncio ${idx + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="px-3 py-1 bg-white/10 hover:bg-white/25 rounded-full text-xs transition cursor-pointer"
              >
                Anterior
              </button>
              <button
                onClick={nextSlide}
                className="px-3 py-1 bg-white/10 hover:bg-white/25 rounded-full text-xs transition cursor-pointer"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto">
        {/* Banner de Bienvenida */}
        <div className="bg-gradient-to-r from-[#39A900] to-emerald-700 text-white rounded-2xl shadow-sm mb-10 overflow-hidden">
          <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold mb-2">¡Bienvenido a AdminSena!</h1>
              <p className="text-base md:text-lg text-emerald-50 mb-0">
                Sistema de gestión de inventarios, aprendices, instructores y ambientes de formación.
              </p>
            </div>
            <div className="text-4xl bg-white/20 p-5 rounded-full flex items-center justify-center shadow-sm shrink-0">
              🏢
            </div>
          </div>
        </div>

        {/* Sección: Estado del Sistema */}
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <h2 className="text-xl font-bold text-gray-700 mb-0">📊 Estado del Sistema (Métricas)</h2>
          <a
            href="/offers"
            className="bg-[#39A900] hover:bg-[#2e8a00] text-white font-bold px-5 py-2.5 rounded-full shadow-sm text-sm transition-all no-underline"
          >
            📢 Ver Ofertas de Formación
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Aprendices', value: 'Activos', emoji: '👨‍🎓' },
            { label: 'Instructores', value: 'Asignados', emoji: '👨‍🏫' },
            { label: 'Cursos / Fichas', value: 'Registrados', emoji: '📚' },
            { label: 'Inventario PC', value: 'Equipos', emoji: '💻' },
            { label: 'Áreas', value: 'Especialidades', emoji: '🛠️' },
            { label: 'Sedes', value: 'Centros', emoji: '🏛️' },
          ].map((metric, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-gray-500 text-sm font-semibold block mb-1">{metric.label}</span>
                <h3 className="text-xl font-bold text-gray-900 mb-0">{metric.value}</h3>
              </div>
              <span className="text-3xl">{metric.emoji}</span>
            </div>
          ))}
        </div>

        {/* Sección: Accesos Rápidos */}
        <h2 className="text-xl font-bold text-gray-700 mb-6">🚀 Panel de Accesos Rápidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Gestión de Aprendices',
              desc: 'Administra los datos personales de los estudiantes, asignación de computadores y fichas asociadas.',
              listHref: '/ApprenticeList',
              regHref: '/ApprenticeRegister',
            },
            {
              title: 'Cursos y Fichas',
              desc: 'Organiza las fichas de formación, jornadas de estudio, áreas técnicas y centros responsables.',
              listHref: '/CourseList',
              regHref: '/CourseRegister',
            },
            {
              title: 'Instructores',
              desc: 'Controla el personal docente, sus correos de contacto, especialidad y vincula su labor a las fichas.',
              listHref: '/teachers',
              regHref: '/teachers/create',
            },
            {
              title: 'Inventario de Equipos',
              desc: 'Registra marcas y números de plaqueta para mantener el control de los computadores de la institución.',
              listHref: '/ComputerList',
              regHref: '/ComputerRegister',
            },
            {
              title: 'Áreas de Formación',
              desc: 'Define las diferentes tecnologías y programas académicos (Sistemas, Diseño, Contabilidad, etc.).',
              listHref: '/AreaList',
              regHref: '/AreaRegister',
            },
            {
              title: 'Centros de Formación',
              desc: 'Crea y edita los centros físicos de capacitación institucional junto con sus ubicaciones geográficas.',
              listHref: '/TrainingCenterList',
              regHref: '/TrainingCenterRegister',
            },
          ].map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 flex flex-col justify-between hover:shadow-md transition-all">
              <div>
                <h5 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h5>
                <p className="text-gray-500 text-sm mb-6">{card.desc}</p>
              </div>
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <a
                  href={card.listHref}
                  className="flex-1 text-center border border-emerald-600 text-emerald-600 hover:bg-emerald-50 text-xs font-semibold py-2 rounded-lg transition no-underline"
                >
                  Ver Listado
                </a>
                <a
                  href={card.regHref}
                  className="flex-1 text-center bg-[#39A900] hover:bg-[#2e8a00] text-white text-xs font-semibold py-2 rounded-lg transition no-underline"
                >
                  Registrar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}