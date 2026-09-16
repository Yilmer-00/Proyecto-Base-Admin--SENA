import React, { useState } from 'react';
// Si usas React Router, puedes importar Link en lugar de usar etiquetas <a>:
// import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu API o función de autenticación
        if (onLogin) {
            onLogin({ email, password, remember });
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
            <div className="card border-0 shadow-lg p-4" style={{ width: '100%', maxWidth: '420px', borderRadius: '16px' }}>

                {/* Encabezado con Icono y Título */}
                <div className="text-center mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 shadow-sm"
                        style={{ width: '70px', height: '70px', backgroundColor: '#00324d', color: '#ffffff', fontSize: '2rem' }}>
                        🔑
                    </div>
                    <h3 className="fw-bold text-dark mb-1">Iniciar Sesión</h3>
                    <p className="text-muted small">Ingresa tus credenciales para acceder a AdminSena</p>
                </div>

                {/* Formulario de Login */}
                <form onSubmit={handleSubmit}>
                    
                    {/* Campo: Correo Electrónico */}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label fw-semibold text-secondary small">Correo Electrónico</label>
                        <input id="email"
                            type="email"
                            className="form-control form-control-lg"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            autoFocus
                            placeholder="ejemplo@sena.edu.co"
                            style={{ borderRadius: '10px', fontSize: '0.95rem' }} />
                    </div>

                    {/* Campo: Contraseña */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-semibold text-secondary small">Contraseña</label>
                        <input id="password"
                            type="password"
                            className="form-control form-control-lg"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="••••••••"
                            style={{ borderRadius: '10px', fontSize: '0.95rem' }} />
                    </div>

                    {/* Opciones: Recordar sesión y Olvidé contraseña */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                            <input className="form-check-input" 
                                type="checkbox" 
                                name="remember" 
                                id="remember" 
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)} />
                            <label className="form-check-label text-muted small" htmlFor="remember">
                                Recordarme
                            </label>
                        </div>
                        <a className="text-decoration-none small fw-semibold" href="/password/reset" style={{ color: '#00324d' }}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    {/* Botones de Acción */}
                    <div className="d-grid gap-2">
                        {/* Botón Principal: CONTINUAR */}
                        <button type="submit"
                            className="btn text-white fw-bold py-2 shadow-sm"
                            style={{ backgroundColor: '#39A900', border: 'none', borderRadius: '10px', fontSize: '1rem' }}>
                            Continuar
                        </button>

                        {/* Botón Secundario: CREAR CUENTA */}
                        <a href="/register"
                            className="btn fw-semibold py-2 shadow-sm text-center text-decoration-none"
                            style={{ borderRadius: '10px', fontSize: '0.95rem', border: '1px solid #00324d', color: '#00324d', backgroundColor: 'transparent' }}>
                            Crear cuenta
                        </a>
                    </div>
                </form>

                {/* Pie de tarjeta: Enlace a Registro */}
                <div className="text-center mt-4 pt-3 border-top">
                    <p className="text-muted small mb-0">
                        ¿No tienes una cuenta?{' '}
                        <a href="/register" className="fw-bold text-decoration-none" style={{ color: '#39A900' }}>
                            Regístrate aquí
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;