import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../layouts';

function Login() {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleLogin = (evt) => {
        evt.preventDefault(); // Corrección aquí

        if (!(correo !== '' || password !== '')) {
            setMensaje('No puedes dejar campos vacíos');
        } else {

            const userData = {
                correo: correo,
                password: password,
            };

            const logueado = async (sesion, correo, nombre, apellidos, genero, fn, rol, foto) => {
                try {
                    localStorage.setItem('logueado', `${sesion}`);
                    localStorage.setItem('correo', `${correo}`);
                    localStorage.setItem('nombre', `${nombre}`);
                    localStorage.setItem('apellidos', `${apellidos}`);
                    localStorage.setItem('fn', `${fn}`);
                    localStorage.setItem('genero', `${genero}`);
                    localStorage.setItem('rol', `${rol}`);
                    localStorage.setItem('foto', `${foto}`);
                } catch (error) {
                    console.error(error);
                }
            };

            axios
                .post('https://zennit-api.onrender.com/api/auth/login', userData)
                .then((response) => {
                    setMensaje('Respuesta del servidor: ' + response.data.message);
                    logueado(response.data.logueado, response.data.correo, response.data.nombre, response.data.apellidos, response.data.genero, response.data.fn, response.data.rol, response.data.foto);
                    window.location.href = "/bancos/proyecto";
                })
                .catch((error) => {
                    if (error.response) {
                        setMensaje(error.response.data.message);
                    } else if (error.request) {
                        setMensaje('No se recibió respuesta del servidor.');
                    } else {
                        setMensaje(
                            'Hubo un error al enviar los datos: ' + error.response.message
                        );
                    }
                })
        }
    }

    return (
        <Layout>
            <section className="container-fluid" style={{ backgroundColor: '#210506' }}>
                <div className="container" style={{ backgroundColor: '#210506', minHeight: '89.1vh' }}>
                    <div className="row justify-content-center align-items-center" style={{ minHeight: '89.1vh' }}>
                        <div className="col-md-12 col-lg-10">
                            <div className="wrap d-md-flex shadow-lg">
                                <div className="text-wrap p-3 p-lg-5 text-center d-flex align-items-center order-md-last" style={{ backgroundColor: '#a70000' }}>
                                    <div className="text w-100">
                                        <h2>Bienvenido al inicio de sesión</h2>
                                        <p>¿No tienes una cuenta?</p>
                                        <Link to="/register" className="btn btn-white btn-outline-white" style={{ borderRadius: 20 }}>Regístrate</Link>
                                    </div>
                                </div>
                                <div className="login-wrap p-3 p-lg-5">
                                    <div className="d-flex justify-content-center">
                                        <h3 className="mb-4 font-weight-bold">Iniciar sesión</h3>
                                    </div>
                                    <form onSubmit={handleLogin} className="signin-form align-items-center">
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="correo">Correo:</label>
                                            <input type="text" className="form-control" placeholder="Correo" required value={correo} onChange={(e) => setCorreo(e.target.value)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label className="label" htmlFor="password">Contraseña</label>
                                            <input type="password" className="form-control" placeholder="Contraseña" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group align-items-center justify-content-center d-flex">
                                            <button type="submit" className="form-control btn btn-primary submit px-3 align-items-center" style={{ borderRadius: 20, width: '40%', height: 40 }}>
                                                Iniciar sesión
                                            </button>
                                        </div>
                                    </form>
                                    <p>{mensaje}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Login;
