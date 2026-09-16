import React, { useState } from 'react';

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
        <div className="container" style={{ maxWidth: '1000px', marginTop: '30px' }}>

            {/* Encabezado de la Sección */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold text-dark m-0">🆔 Carnet Digital y Control de Acceso</h3>
                    <small className="text-muted">
                        Módulo independiente de identificación y registro mediante código QR.
                    </small>
                </div>

                <button onClick={handlePrint} className="btn btn-outline-secondary btn-sm rounded-pill shadow-sm">
                    🖨️ Imprimir Carnet
                </button>
            </div>

            <div className="row g-4 justify-content-center">

                {/* Tarjeta del Carnet Digital SENA */}
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="card shadow-lg border-0 rounded-4 overflow-hidden">

                        {/* Encabezado Verde SENA */}
                        <div className="p-3 text-white text-center" style={{ backgroundColor: '#39A900' }}>
                            <span className="badge bg-white text-success fw-bold px-3 py-1 rounded-pill mb-1"
                                style={{ fontSize: '11px' }}>
                                SERVICIO NACIONAL DE APRENDIZAJE
                            </span>
                            <h5 className="fw-bold m-0 text-uppercase tracking-wide">
                                Carnet Digital
                            </h5>
                        </div>

                        {/* Cuerpo del Carnet */}
                        <div className="card-body p-4 text-center bg-white">

                            {/* Avatar */}
                            <div className="mb-3 position-relative d-inline-block">
                                <div className="rounded-circle bg-light border border-3 border-success d-flex align-items-center justify-content-center mx-auto shadow-sm"
                                    style={{ width: '90px', height: '90px' }}>
                                    <span className="fs-1 fw-bold text-success">
                                        {getInitials(currentUser.name)}
                                    </span>
                                </div>
                            </div>

                            {/* Nombre dinámico */}
                            <h5 className="fw-bold text-dark mb-1">
                                {currentUser.name}
                            </h5>

                            {/* Rol dinámico */}
                            <p className="text-muted small mb-2 text-capitalize">
                                {currentUser.role}
                            </p>

                            {/* Correo dinámico */}
                            <p className="text-muted small mb-2">
                                {currentUser.email}
                            </p>

                            {/* Información del usuario */}
                            <div className="d-flex justify-content-center gap-2 mb-3 flex-wrap">
                                <span className="badge bg-light text-dark border">
                                    ID: {currentUser.id}
                                </span>
                                <span className="badge bg-success text-white text-capitalize">
                                    {currentUser.role}
                                </span>
                            </div>

                            <hr className="my-3" />

                            {/* Código QR */}
                            <div className="p-3 bg-light rounded-3 d-inline-block border mb-2 shadow-sm">
                                <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${currentUser.id}`}
                                    alt="Código QR de Acceso"
                                    className="img-fluid rounded"
                                    style={{ width: '130px', height: '130px' }} />
                            </div>

                            <p className="text-muted small m-0 fw-semibold" style={{ fontSize: '11px' }}>
                                Usuario: {currentUser.email}
                            </p>

                        </div>

                        {/* Pie del Carnet */}
                        <div className="card-footer bg-light text-center py-2 border-top-0">
                            <small className="text-muted" style={{ fontSize: '10px' }}>
                                Regional Cauca | Centro de Comercio y Servicio
                            </small>
                        </div>

                    </div>
                </div>

                {/* Simulador del Lector de Acceso */}
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="card shadow border-0 rounded-3 h-100">

                        <div className="card-header bg-dark text-white py-3">
                            <h6 className="mb-0 fw-bold">
                                📟 Simulador de Punto de Control (Ambientes)
                            </h6>
                        </div>

                        <div className="card-body p-4 d-flex flex-column justify-content-between">
                            <div>
                                <p className="text-muted small mb-3">
                                    Este panel simula la pantalla del escáner en la entrada de los laboratorios o aulas de formación.
                                </p>

                                {/* Estado del Acceso */}
                                <div className="alert alert-success border-0 shadow-sm rounded-3 p-3 mb-3">
                                    <div className="d-flex align-items-center gap-3">
                                        <span className="fs-1">✅</span>
                                        <div>
                                            <h6 className="fw-bold mb-0">ACCESO PERMITIDO</h6>
                                            <small className="d-block text-success fw-semibold">
                                                Ingreso registrado correctamente
                                            </small>
                                        </div>
                                    </div>
                                </div>

                                {/* Detalles del Registro */}
                                <ul className="list-group list-group-flush border-top border-bottom mb-3 small">
                                    <li className="list-group-item d-flex justify-content-between px-0 py-2">
                                        <span className="text-muted">Usuario:</span>
                                        <span className="fw-bold text-dark">{currentUser.name}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between px-0 py-2">
                                        <span className="text-muted">Hora de Ingreso:</span>
                                        <span className="fw-bold text-dark">{currentTime}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between px-0 py-2">
                                        <span className="text-muted">Rol:</span>
                                        <span className="badge bg-success text-capitalize">{currentUser.role}</span>
                                    </li>
                                </ul>
                            </div>

                            <button className="btn btn-outline-dark btn-sm w-100 rounded-pill"
                                onClick={handleSimulateScan}>
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