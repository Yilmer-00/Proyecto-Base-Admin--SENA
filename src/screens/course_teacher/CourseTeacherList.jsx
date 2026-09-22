import { useState } from "react";
import { Link } from "react-router-dom";

// Datos de prueba para el módulo de asignaciones
const mockCourseTeachers = [
  {
    id: 1,
    course: { course_number: '2711823', day: 'Mañana / Lunes a Viernes' },
    teacher: { name: 'Ing. Carlos Alvarado', email: 'calvarado@sena.edu.co' }
  },
  {
    id: 2,
    course: { course_number: '2711824', day: 'Tarde / Lunes a Viernes' },
    teacher: { name: 'Dra. María Fernanda López', email: 'mlopez@sena.edu.co' }
  },
  {
    id: 3,
    course: { course_number: '2875190', day: 'Nocturna' },
    teacher: { name: 'Esp. Andrés Felipe Muñoz', email: 'amunoz@sena.edu.co' }
  }
];

const CourseTeacherList = ({
  courseTeachers = mockCourseTeachers,
  onDelete,
  successMessage: propSuccessMessage,
}) => {
  const [teachersList, setTeachersList] = useState(courseTeachers);
  const [successMessage, setSuccessMessage] = useState(propSuccessMessage || "");

  // Estados para modales interactivos
  const [viewAssignment, setViewAssignment] = useState(null); // Para "Mostrar"
  const [editAssignment, setEditAssignment] = useState(null); // Para "Editar"

  // 1. Función Eliminar
  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar esta asignación?")) {
      setTeachersList(teachersList.filter(item => item.id !== id));
      setSuccessMessage("Asignación eliminada exitosamente.");
      if (onDelete) onDelete(id);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  // 2. Guardar Edición
  const handleSaveEdit = (e) => {
    e.preventDefault();
    setTeachersList(teachersList.map(item => item.id === editAssignment.id ? editAssignment : item));
    setEditAssignment(null);
    setSuccessMessage("Asignación actualizada exitosamente.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <div className="max-w-[1050px] mx-auto mt-[30px] px-4">
      {/* Botones de Navegación Rápida */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-bold">Módulo de Asignaciones</span>
        {/* Botón que apunta a la ruta de registro */}
        <Link
          to="/CourseTeacherRegister"
          className="bg-[#39A900] hover:bg-[#329400] text-white text-sm font-medium px-3 py-1.5 rounded shadow-sm transition-colors flex items-center gap-1.5 no-underline"
        >
          ➕ Asignar Nuevo Instructor
        </Link>
      </div>

      {/* Alerta de Éxito Opcional */}
      {successMessage && (
        <div
          className="bg-green-50 text-green-800 p-4 rounded-lg shadow-sm mb-4 border-l-4 border-[#39A900] flex justify-between items-center"
          role="alert"
        >
          <div>
            <strong className="font-bold">¡Éxito! </strong>
            <span>{successMessage}</span>
          </div>
          <button
            type="button"
            className="text-green-700 hover:text-green-900 font-bold text-xl leading-none bg-transparent border-0 cursor-pointer"
            aria-label="Close"
            onClick={() => setSuccessMessage("")}
          >
            &times;
          </button>
        </div>
      )}

      {/* Tarjeta que contiene la Tabla */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-100">
        {/* Encabezado de la Tarjeta con el Verde SENA */}
        <div className="bg-[#39A900] text-white px-6 py-4">
          <h4 className="text-lg font-bold m-0">
            📅 Asignación de Instructores a Cursos
          </h4>
        </div>

        <div className="p-0">
          {/* Tabla Responsiva */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse align-middle">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider border-b border-gray-200">
                <tr>
                  <th className="pl-6 py-3 font-bold w-[8%]">ID</th>
                  <th className="py-3 font-bold w-[22%]">Número de Curso (Ficha)</th>
                  <th className="py-3 font-bold w-[15%]">Jornada</th>
                  <th className="py-3 font-bold w-[23%]">Instructor Asignado</th>
                  <th className="py-3 font-bold w-[17%]">Email Instructor</th>
                  <th className="py-3 text-center font-bold w-[15%] pr-6">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {teachersList && teachersList.length > 0 ? (
                  teachersList.map((assignment) => (
                    <tr key={assignment.id} className="hover:bg-gray-50 transition-colors">
                      {/* ID */}
                      <td className="pl-6 py-4 font-bold text-gray-600">
                        {assignment.id}
                      </td>

                      {/* Número de Ficha */}
                      <td className="py-4 font-bold text-gray-800">
                        <span className="bg-gray-100 text-gray-800 border border-gray-300 px-2.5 py-1 rounded text-xs font-semibold">
                          {assignment.course?.course_number ||
                            assignment.curse?.course_number ||
                            "N/A"}
                        </span>
                      </td>

                      {/* Jornada (Day) */}
                      <td className="py-4 text-gray-600">
                        <i className="far fa-clock text-[#39A900] mr-1"></i>
                        {assignment.course?.day ||
                          assignment.curse?.day ||
                          "N/A"}
                      </td>

                      {/* Instructor */}
                      <td className="py-4 font-semibold text-gray-800">
                        {assignment.teacher?.name || "Sin Instructor"}
                      </td>

                      {/* Email Instructor */}
                      <td className="py-4 text-gray-500 text-sm break-all">
                        {assignment.teacher?.email || "N/A"}
                      </td>

                      {/* Botones de Acciones */}
                      <td className="pr-6 py-4 text-center">
                        <div className="flex gap-2 justify-center items-center">
                          {/* Botón Mostrar */}
                          <button
                            type="button"
                            onClick={() => setViewAssignment(assignment)}
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1.5 rounded shadow-sm transition-colors font-medium cursor-pointer border-0"
                          >
                            Mostrar
                          </button>

                          {/* Botón Editar */}
                          <button
                            type="button"
                            onClick={() => setEditAssignment(assignment)}
                            className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold text-xs px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                          >
                            Editar
                          </button>

                          {/* Botón Eliminar */}
                          <button
                            type="button"
                            className="bg-red-600 hover:bg-red-700 text-white text-xs font-medium px-3 py-1.5 rounded shadow-sm transition-colors cursor-pointer border-0"
                            onClick={() => handleDelete(assignment.id)}
                          >
                            Eliminar
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  /* Mensaje por si la tabla está vacía */
                  <tr>
                    <td colSpan="6" className="text-center py-12 text-gray-400">
                      <i className="fas fa-link text-3xl mb-3 block text-gray-300"></i>
                      No hay asignaciones de instructores registradas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* MODAL MOSTRAR DETALLES */}
      {viewAssignment && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4">🔍 Detalle de la Asignación</h3>
            <div className="space-y-2 text-sm text-gray-600 mb-6 bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p><strong>ID:</strong> {viewAssignment.id}</p>
              <p><strong>Número de Ficha:</strong> {viewAssignment.course?.course_number || viewAssignment.curse?.course_number || "N/A"}</p>
              <p><strong>Jornada:</strong> {viewAssignment.course?.day || viewAssignment.curse?.day || "N/A"}</p>
              <p><strong>Instructor Asignado:</strong> {viewAssignment.teacher?.name || "Sin Instructor"}</p>
              <p><strong>Email Instructor:</strong> {viewAssignment.teacher?.email || "N/A"}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setViewAssignment(null)}
                className="bg-gray-500 hover:bg-gray-600 text-white text-xs font-medium px-4 py-2 rounded cursor-pointer border-0"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL EDITAR ASIGNACIÓN */}
      {editAssignment && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl">
            <h3 className="text-lg font-bold text-gray-800 mb-4">✏️ Editar Asignación de Instructor</h3>
            <form onSubmit={handleSaveEdit}>
              <div className="mb-3">
                <label className="block text-xs font-bold text-gray-500 mb-1">Número de Ficha / Curso</label>
                <input
                  type="text"
                  value={editAssignment.course?.course_number || editAssignment.curse?.course_number || ""}
                  onChange={(e) => setEditAssignment({
                    ...editAssignment,
                    course: { ...editAssignment.course, course_number: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block text-xs font-bold text-gray-500 mb-1">Instructor Asignado</label>
                <input
                  type="text"
                  value={editAssignment.teacher?.name || ""}
                  onChange={(e) => setEditAssignment({
                    ...editAssignment,
                    teacher: { ...editAssignment.teacher, name: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs font-bold text-gray-500 mb-1">Email del Instructor</label>
                <input
                  type="email"
                  value={editAssignment.teacher?.email || ""}
                  onChange={(e) => setEditAssignment({
                    ...editAssignment,
                    teacher: { ...editAssignment.teacher, email: e.target.value }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900]"
                  required
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setEditAssignment(null)}
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

export default CourseTeacherList;