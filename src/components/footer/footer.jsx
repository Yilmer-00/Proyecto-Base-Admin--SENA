const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 py-12 mt-12 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Columna 1: Branding y Propósito */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-8 bg-[#39A900] rounded-sm"></div>
              <h4 className="text-white font-extrabold text-xl tracking-wide mb-0">
                AdminSENA
              </h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed pr-lg-4">
              Plataforma integral para la gestión, control e inventario de
              ambientes de formación, instructores y recursos tecnológicos de
              la institución.
            </p>
            <div className="inline-flex items-center bg-gray-800/60 px-3 py-1.5 rounded-full mt-2 border border-gray-700/50">
              <span className="w-2.5 h-2.5 bg-[#39A900] rounded-full animate-pulse mr-2"></span>
              <span className="text-white text-xs font-semibold">
                Todos los sistemas operativos
              </span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos de Navegación */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-base mb-3">Accesos Rápidos</h5>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/teacher/create"
                    className="text-gray-400 hover:text-[#39A900] transition-all duration-200 hover:translate-x-1 inline-block no-underline"
                  >
                    Instructores
                  </a>
                </li>
                <li>
                  <a
                    href="/area/create"
                    className="text-gray-400 hover:text-[#39A900] transition-all duration-200 hover:translate-x-1 inline-block no-underline"
                  >
                    Áreas
                  </a>
                </li>
                <li>
                  <a
                    href="/computer/create"
                    className="text-gray-400 hover:text-[#39A900] transition-all duration-200 hover:translate-x-1 inline-block no-underline"
                  >
                    Inventario PC
                  </a>
                </li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/course"
                    className="text-gray-400 hover:text-[#39A900] transition-all duration-200 hover:translate-x-1 inline-block no-underline"
                  >
                    Fichas/Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="/course-teacher"
                    className="text-gray-400 hover:text-[#39A900] transition-all duration-200 hover:translate-x-1 inline-block no-underline"
                  >
                    Asignaciones
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 3: Información del Centro de Formación */}
          <div className="space-y-4">
            <h5 className="text-white font-bold text-base mb-3">Centro de Operación</h5>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span className="text-[#39A900] text-base">📍</span>
              <span>Centro de Comercio y Servicios — Regional Cauca</span>
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-2">
              <span className="text-[#39A900] text-base">🎧</span>
              <span>Mesa de ayuda: +57 (602) 8224000</span>
            </p>

            {/* Iconos de Redes */}
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-gray-700 text-white transition-all duration-300 hover:bg-[#39A900] hover:border-[#39A900] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#39A900]/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                🌐
              </a>
              <a
                href="https://twitter.com"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-gray-700 text-white transition-all duration-300 hover:bg-[#39A900] hover:border-[#39A900] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#39A900]/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
              </a>
              <a
                href="https://instagram.com"
                className="w-9 h-9 inline-flex items-center justify-center rounded-full border border-gray-700 text-white transition-all duration-300 hover:bg-[#39A900] hover:border-[#39A900] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#39A900]/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                📸
              </a>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        {/* Copyright y Crédito */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-4">
          <div className="text-center md:text-left">
            <p className="mb-0">
              &copy; {currentYear}{' '}
              <strong className="text-white">AdminSENA</strong>. Hecho para
              el ambiente de formación.
            </p>
          </div>
          <div className="text-center">
            <span className="bg-gray-800 border border-gray-700 text-white px-3 py-1.5 rounded-full text-xs font-medium">
              Versión de Producción 2.1.0
            </span>
          </div>
          <div className="text-center md:text-right">
            <span className="text-[#39A900] font-bold text-sm">
              Yilmer Alexander Melenge Cordoba 👋
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;