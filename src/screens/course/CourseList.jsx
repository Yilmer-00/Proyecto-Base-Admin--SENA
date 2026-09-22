import { useState } from "react";
import { Link } from "react-router-dom";

const mockCourses = [
  {
    id: 1,
    course_number: '2711823',
    day: 'Mañana / Lunes a Viernes',
    area: { name: 'Análisis y Desarrollo de Software' },
    trainig_center: { name: 'Centro de Comercio y Servicios' }
  },
  {
    id: 2,
    course_number: '2711824',
    day: 'Tarde / Lunes a Viernes',
    area: { name: 'Redes y Telecomunicaciones' },
    trainig_center: { name: 'Centro de Teleinformática y Producción Industrial' }
  },
  {
    id: 3,
    course_number: '2875190',
    day: 'Nocturna',
    area: { name: 'Contabilidad y Finanzas' },
    trainig_center: { name: 'Centro de Comercio y Servicios' }
  }
];

const CourseList = () => {
  const [courses, setCourses] = useState(mockCourses);
  const [successMessage, setSuccessMessage] = useState("");

  // Estados para los modales interactivos
  const [viewCourse, setViewCourse] = useState(null); // Para "Mostrar"
  const [editCourse, setEditCourse] = useState(null); // Para "Editar"

  // 1. Función Eliminar
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este curso?")) {
      setCourses(courses.filter(course => course.id !== id));
      setSuccessMessage("Curso eliminado exitosamente.");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  // 2. Guardar Edición
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setCourses(courses.map(c => c.id === editCourse.id ? editCourse : c));
    setEditCourse(null);
    setSuccessMessage("Curso actualizado exitosamente.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-[30px] px-4">
      {/* Botones de Navegación Rápida */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-bold">Módulo de Cursos (Fichas)</span>
        <Link
          to="/CourseRegister"
          className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
        >
          ➕ Registrar Nuevo Curso
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
            onClick={() => setSuccessMessage("")}
          >
            &times;
          </button>
        </div>
      )}

      {/* Tarjeta que contiene la Tabla */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        <div className="bg-[#39A900] text-white px-6 py-4">
          <h4 className="text-lg font-bold m-0">📋 Listado de Cursos</h4>
        </div>

        <div className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse align-middle">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                <tr>
                  <th className="pl-6 py-3 font-bold w-[8%]">ID</th>
                  <th className="py-3 font-bold w-[18%]">Número de Curso</th>
                  <th className="py-3 font-bold w-[15%]">Jornada</th>
                  <th className="py-3 font-bold w-[20%]">Área</th>
                  <th className="py-3 font-bold w-[22%]">Centro de Formación</th>
                  <th className="py-3 text-center font-bold w-[17%] pr-6">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courses.length > 0 ? (
                  courses.map((course) => (
                    <tr key={course.id} className="hover:bg-gray-50 transition-colors">
                      <td className="pl-6 py-4 font-bold text-gray-600">{course.id}</td>
                      <td className="py-4 font-bold text-gray-800">
                        <span className="bg-gray-100 text-gray-800 border border-gray-300 px-2.5 py-1 rounded text-xs font-semibold">
                          {course.course_number}
                        </span>
                      </td>
                      <td className="py-4 text-gray-600">
                        <i className="far fa-clock text-[#39A900] mr-1"></i> {course.day}
                      </td>
                      <td className="py-4 text-gray-800 font-semibold">{course.area?.name}</td>
                      <td className="py-4 text-gray-500 text-sm">
                        <i className="fas fa-building text-gray-400 mr-1"></i> {course.trainig_center?.name}
                      </td>
                      <td className="pr-6 py-4 text-center">
                        <div className="flex gap-2 justify-center items-center">
                          {/* Botón Mostrar (Abre Modal) */}
                          <button
                            type="button"
                            onClick={() => setViewCourse(course)}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                          >
                            Mostrar
                          </button>

                          {/* Botón Editar (Abre Formulario Modal) */}
                          <button
                            type="button"
                            onClick={() => setEditCourse(course)}
                            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                          >
                            Editar
                          </button>

                          {/* Botón Eliminar */}
                          <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                            onClick={() => handleDelete(course.id)}
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
                      <i className="fas fa-graduation-cap text-3xl mb-3 block text-gray-300"></i>
                      No hay cursos ni fichas registradas en el sistema.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL MOSTRAR DETALLES */}
      {viewCourse && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle del Curso (Ficha #{viewCourse.course_number})</h3>
            <div className="space-y-2 text-sm text-gray-600 mb-6">
              <p><strong>ID:</strong> {viewCourse.id}</p>
              <p><strong>Jornada:</strong> {viewCourse.day}</p>
              <p><strong>Área:</strong> {viewCourse.area?.name}</p>
              <p><strong>Centro de Formación:</strong> {viewCourse.trainig_center?.name}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setViewCourse(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITAR */}
      {editCourse && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Curso</h3>
            <form onSubmit={handleSaveEdit}>
              <div className="mb-3">
                <label className="block text-xs font-bold text-gray-500 mb-1">Número de Curso (Ficha)</label>
                <input
                  type="text"
                  value={editCourse.course_number}
                  onChange={(e) => setEditCourse({ ...editCourse, course_number: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 mb-1">Jornada</label>
                <input
                  type="text"
                  value={editCourse.day}
                  onChange={(e) => setEditCourse({ ...editCourse, day: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditCourse(null)}
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

export default CourseList;