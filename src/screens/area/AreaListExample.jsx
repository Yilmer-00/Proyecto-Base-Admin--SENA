import { useState } from 'react';
import AreaList from './AreaList'; // Asegúrate de ajustar la ruta de importación si es necesario

const AreaListExample = () => {
    // 📊 Datos de prueba iniciales
    const [areas, setAreas] = useState([
        { id: 1, name: 'Análisis y Desarrollo de Software (ADSO)' },
        { id: 2, name: 'Multimedia y Producción de Contenidos' },
        { id: 3, name: 'Redes y Seguridad Informática' },
        { id: 4, name: 'Mantenimiento de Equipos de Cómputo' }
    ]);

    // Mensaje de éxito de prueba
    const [successMessage, setSuccessMessage] = useState('¡Listado de áreas cargado correctamente!');

    // Función simulada para eliminar un registro del estado
    const handleDelete = (id) => {
        setAreas(areas.filter(area => area.id !== id));
        setSuccessMessage(`Área con ID ${id} eliminada con éxito.`);
    };

    return (
        <div>
            <AreaList 
                areas={areas} 
                onDelete={handleDelete} 
                successMessage={successMessage} 
            />
        </div>
    );
};

export default AreaListExample;