import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/css/estilo.css';
import bootstrap from '../../assets/css/estilo.css';
import Layout from '../layouts';

function Login() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://zennit-api.onrender.com/api/bancos/Proyecto');
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
        };
    }, []);

    return (
        <Layout>
        <section className="container-fluid" style={{ backgroundColor: '#210506' }}>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container" style={{ backgroundColor: '#210506', minHeight: '89.1vh' }}>
                <div className="row justify-content-center align-items-center" style={{ minHeight: '89.1vh' }}>
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex shadow-lg">
                            <div className="text-wrap p-3 p-lg-5 text-center d-flex align-items-center order-md-last" style={{ backgroundColor: '#a70000' }}>
                                <div className="text w-100">
                                    <h2>Bienvenido al registro</h2>
                                    <p>¿Ya tienes una cuenta?</p>
                                    <Link to="/login" className="btn btn-white btn-outline-white" style={{ borderRadius: 20 }}>Iniciar sesión</Link>
                                </div>
                            </div>
                            <div className="login-wrap p-3 p-lg-5">
                                <form action="#" className="signin-form align-items-center">
                                    <div className='form-row'>
                                        <div className="form-group col-md-6 mb-3">
                                            <label className="label" for="name">Nombre(s):</label>
                                            <input type="text" className="form-control" placeholder="Nombre(s)" required />
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <label className="label" for="name">Apellidos:</label>
                                            <input type="text" className="form-control" placeholder="Apellidos" required />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="email">Correo:</label>
                                        <input type="email" className="form-control" placeholder="Correo electrónico" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Contraseña:</label>
                                        <input type="password" className="form-control" placeholder="Contraseña" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Confirmar contraseña:</label>
                                        <input type="password" className="form-control" placeholder="Confirmar contraseña" required />
                                    </div>
                                    <div className='form-row'>
                                        <div className="form-group col-md-6 mb-3">
                                            <label className="label" for="gender">Género:</label>
                                            <select className="form-control" id="gender" required>
                                                <option value="">Seleccionar</option>
                                                <option value="masculino">Masculino</option>
                                                <option value="femenino">Femenino</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6 mb-3">
                                            <label className="label" for="birthdate">Fecha de Nacimiento:</label>
                                            <input className="form-control" id="birthdate" type="date" required/>
                                        </div>
                                    </div>
                                    <div className="form-group align-items-center justify-content-center d-flex">
                                        <button type="submit" className="form-control btn btn-primary submit px-3 align-items-center" style={{ borderRadius: 20, width: '40%', height: 40 }}>Registrarse</button>
                                    </div>
                                </form>
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
