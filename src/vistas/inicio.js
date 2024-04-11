
import React, { useEffect, useState } from 'react';
import banner from '../assets/images/Foto.jpeg';
import axios from 'axios';
import casa from '../assets/images/Casa1.jpeg';
import Login from './auth/login';
import Dashboard from './banco/dashboard';
import Layout from './layouts';
import '../assets/styles.css';
import { Link } from 'react-router-dom';

function App() {
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [bateria, setBateria] = useState(0);
    const [disponible, setDisponible] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://zennit-api.onrender.com/api/bancos/Proyecto');
                setNombre(response.data.nombre);
                setDireccion(response.data.ubicacion);
                setDisponible(response.data.disponible ? 'Disponible' : 'No disponible');
                setBateria(response.data.bateria);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
        const interval = setInterval(fetchData, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [nombre, direccion, disponible, bateria]); // Asegúrate de incluir todas las variables utilizadas aquí

    return (
        <Layout>
        <div className="d-flex flex-column h-100">
            
            <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
            <link href="../assets/styles.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
            <script src="js/scripts.js"></script>
            <main className="flex-shrink-0">

                <header className="bg-dark py-5">
                    <div className="container px-5">
                        <div className="row gx-5 align-items-center justify-content-center">
                            <div className="col-xl-5 col-xxl-6  d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src={banner} alt="..." /></div>
                            <div className="col-lg-8 col-xl-7 col-xxl-6">
                                <div className="my-5 text-center text-xl-start">
                                    <h1 className="display-5 fw-bolder text-center text-white mb-2">Zennith</h1>
                                    <p className="lead fw-normal text-white-50 mb-4">Somos una startup dedicada al cuidado del medio ambiente mediante bancos de energía solares. Nuestros productos generan electricidad limpia y sostenible, promoviendo un futuro más verde y energéticamente eficiente.</p>
                                    <div className="d-grid gap-3 d-sm-flex justify-content-sm-center">

                                        <Link className="btn btn-outline-dark btn-lg px-4  text-white bg-primary" to="/login">Iniciar sesión</Link>
                                        <Link className="btn btn-outline-light btn-lg px-4" to="/register">Registrarse</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <section className="py-5" id="features">
                    <div className="container px-5 my-5">
                        <div className="row gx-5">
                            <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">Presentamos a Zennith: Una Solución Sostenible de Energía.</h2></div>
                            <div className="col-lg-8">
                                <div className="row gx-5 row-cols-1 row-cols-md-2">
                                    <div className="col mb-5 h-100">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-arrow-down-circle-fill"></i></div>
                                        <h2 className="h5">Menor huella ambiental</h2>
                                        <p className="mb-0">Nuestros bancos de energía alimentados por paneles solares están diseñados para proporcionar una fuente de energía limpia.</p>
                                    </div>
                                    <div className="col mb-5 h-100">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-dash-circle-fill"></i></div>
                                        <h2 className="h5">Reduciendo la huella</h2>
                                        <p className="mb-0">Empoderando la Sostenibilidad, Un Panel Solar a la Vez.</p>
                                    </div>
                                    <div className="col mb-5 mb-md-0 h-100">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-stars"></i></div>
                                        <h2 className="h5">Innovando</h2>
                                        <p className="mb-0">Innovación en su Núcleo: Enfocándonos en el camino hacia la Preservación Ambiental</p>
                                    </div>
                                    <div className="col h-100">
                                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-dash-circle-fill"></i></div>
                                        <h2 className="h5">Compromiso sostenible</h2>
                                        <p className="mb-0">Impulsando el Cambio a través de la Innovación: El Compromiso de Zennith con un Mañana Sostenible.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="py-5 bg-light">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-10 col-xl-7">
                                <div className="text-center">
                                    <div className="fs-4 mb-4 fst-italic">"Nos comprometemos a ofrecer soluciones innovadoras para abordar los desafíos ambientales actuales"</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="fw-bold">
                                            Zennith
                                            <span className="fw-bold text-primary mx-1">/</span>
                                            Equipo de trabajo
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <div className="text-center">
                                    <h2 className="fw-bolder">Echa un vistazo</h2>
                                    <p className="lead fw-normal text-muted mb-5">Conoce con una breve demostración como funciona y como luce uno de nuestros bancos de energía</p>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-4 mb-5">
                                <Link className="card h-100 shadow border-0" to="/bancos/Proyecto">
                                    <img className="card-img-top" src={casa} alt="..." />
                                    <div className="card-body p-4">
                                        <div className="badge bg-primary bg-gradient rounded-pill mb-2">DEMOSTRACIÓN</div>
                                        <a className="text-decoration-none link-dark stretched-link" href="#!"><h5 className="card-title mb-3">{nombre}</h5></a>
                                        <p className="card-text mb-0">{direccion}</p>
                                        <p className="card-text mb-0">{bateria}%</p>
                                        <p className="card-text mb-0">Disponibilidad:</p>
                                        <p className="card-text mb-0">{disponible}</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
        </Layout>
    );
}

export default App;
