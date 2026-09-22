import { useState } from 'react';
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
        <div className="min-h-[80vh] flex justify-center items-center px-4">
            <div className="w-full max-w-[420px] bg-white shadow-xl p-8 rounded-[16px] border border-gray-100">

                {/* Encabezado con Icono y Título */}
                <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center rounded-full mb-3 shadow-sm w-[70px] h-[70px] bg-[#00324d] text-white text-2xl">
                        🔑
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Iniciar Sesión</h3>
                    <p className="text-xs text-gray-500">Ingresa tus credenciales para acceder a AdminSena</p>
                </div>

                {/* Formulario de Login */}
                <form onSubmit={handleSubmit}>

                    {/* Campo: Correo Electrónico */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-xs font-semibold text-gray-600 mb-1.5">Correo Electrónico</label>
                        <input id="email"
                            type="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent bg-white text-gray-800"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            autoComplete="email"
                            autoFocus
                            placeholder="ejemplo@sena.edu.co" />
                    </div>

                    {/* Campo: Contraseña */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-xs font-semibold text-gray-600 mb-1.5">Contraseña</label>
                        <input id="password"
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-[10px] text-sm focus:outline-none focus:ring-2 focus:ring-[#39A900] focus:border-transparent bg-white text-gray-800"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            autoComplete="current-password"
                            placeholder="••••••••" />
                    </div>

                    {/* Opciones: Recordar sesión y Olvidé contraseña */}
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2">
                            <input className="w-4 h-4 text-[#39A900] border-gray-300 rounded focus:ring-[#39A900] cursor-pointer"
                                type="checkbox"
                                name="remember"
                                id="remember"
                                checked={remember}
                                onChange={(e) => setRemember(e.target.checked)} />
                            <label className="text-xs text-gray-500 cursor-pointer" htmlFor="remember">
                                Recordarme
                            </label>
                        </div>
                        <a className="text-xs font-semibold text-[#00324d] hover:underline no-underline" href="/password/reset">
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex flex-col gap-3">
                        {/* Botón Principal: CONTINUAR */}
                        <button type="submit"
                            className="w-full bg-[#39A900] hover:bg-[#329400] text-white font-bold py-3 shadow-sm transition-colors cursor-pointer border-0 rounded-[10px] text-base">
                            Continuar
                        </button>

                        {/* Botón Secundario: CREAR CUENTA */}
                        <a href="/register"
                            className="w-full font-semibold py-3 shadow-sm text-center text-decoration-none rounded-[10px] text-sm border border-[#00324d] text-[#00324d] hover:bg-gray-50 transition-colors">
                            Crear cuenta
                        </a>
                    </div>
                </form>

                {/* Pie de tarjeta: Enlace a Registro */}
                <div className="text-center mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500 mb-0">
                        ¿No tienes una cuenta?{' '}
                        <a href="/register" className="font-bold text-[#39A900] hover:underline no-underline">
                            Regístrate aquí
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;