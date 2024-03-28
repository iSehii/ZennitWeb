import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../assets/css/estilo.css';
import bootstrap from '../../assets/css/estilo.css';

function Login() {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3005/api/bancos/Proyecto');
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        return () => {
        };
    }, []);

    return (
        <section className="container-fluid" style={{backgroundColor: '#210506'}}>
            <link rel='stylesheet' href={bootstrap} ></link>
            <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
            <div className="container" style={{ backgroundColor: '#210506', minHeight: '100vh' }}>
                <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                    <div className="col-md-12 col-lg-10">
                        <div className="wrap d-md-flex shadow-lg">
                            <div className="text-wrap p-3 p-lg-5 text-center d-flex align-items-center order-md-last" style={{ backgroundColor: '#a70000'}}>
                                <div className="text w-100">
                                    <h2>Bienvenido al inicio de sesión</h2>
                                    <p>¿No tienes una cuenta?</p>
                                    <Link to="/register" className="btn btn-white btn-outline-white" style={{borderRadius: 20}}>Regístrate</Link>
                                </div>
                            </div>
                            <div className="login-wrap p-3 p-lg-5">
                                <div className="d-flex justify-content-center">
                                    <h3 className="mb-4 font-weight-bold">Iniciar sesión</h3>
                                </div>
                                <form action="#" className="signin-form align-items-center">
                                    <div className="form-group mb-3">
                                        <label className="label" for="name">Correo:</label>
                                        <input type="text" className="form-control" placeholder="Correo" required />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="label" for="password">Contraseña</label>
                                        <input type="password" className="form-control" placeholder="Contraseña" required />
                                    </div>
                                    <div className="form-group align-items-center justify-content-center d-flex">
                                        <button type="submit" className="form-control btn btn-primary submit px-3 align-items-center" style={{borderRadius: 20, width: '40%', height: 40}}>Iniciar sesión</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
