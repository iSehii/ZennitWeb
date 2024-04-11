import Layout from "../layouts";
import '../../assets/styles.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Panel from '../../assets/images/Panel.png';

export default function Component() {
    const [bateria, setBateria] = useState(0);

    const [mensaje, setMensaje] = useState('');
    const [correo, setCorreo] = useState('');
    const [rol, setRol] = useState('');
    const [tokenInput, setTokenInput] = useState('');
    const [percentage, setPercentage] = useState(0);
    const [nombre, setNombre] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [disponible, setDisponible] = useState(false);
    const [token, setToken] = useState('');
    const [usuario, setUsuario] = useState('');

    const usar = () => {
        const updateData = {
            usuario: correo,
            disponible: false,
            token: tokenInput,
        };
        axios.put(`https://zennit-api.onrender.com/api/bancos/dejar/Proyecto`, updateData)
            .then(response => {
                setMensaje(response.data.message);
            })
            .catch(error => {
                console.log("Errors: " + error.response.data.message);
            });
    };

    const dejarUsar = () => {
        const updateData = {
            usuario: null,
            disponible: true,
            token: token,
        };
        axios.put(`https://zennit-api.onrender.com/api/bancos/dejar/Proyecto`, updateData)
            .then(response => {
                setTokenInput('');
            })
            .catch(error => {
                console.log("Errors: " + error.response.data.message);
            });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://zennit-api.onrender.com/api/bancos/Proyecto');
                // Verifica si la respuesta es exitosa
                if (response.status === 200) {
                    // Asigna el valor de la batería a un estado
                    setPercentage(response.data.bateria);
                    setNombre(response.data.nombre);
                    setUbicacion(response.data.ubicacion);
                    setDisponible(response.data.disponible);
                    setToken(response.data.token);
                    setUsuario(response.data.usuario);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        const correoLocalStorage = localStorage.getItem('correo');
        const rolLocalStorage = localStorage.getItem('rol');

        if (correoLocalStorage !== null) {
            setCorreo(correoLocalStorage);
        }

        if (rolLocalStorage !== null) {
            setRol(rolLocalStorage);
        }

        fetchData();
        const interval = setInterval(fetchData, 500); // Consulta cada 5 segundos
        return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
    }, []);
    return (
        <Layout>
            <div className="container py-5">
                <div className="shadow p-4">
                    <h1 className="text-center font-weight-bold mb-4 display-4">Proyecto</h1>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-4">
                            <p className="mb-0 text-muted">Último uso: 31/03/2024</p>
                            <p style={{ color: disponible === 'Disponible' ? 'green' : 'red' }}>{disponible}</p>
                        </div>
                        <div className="col-md-4">
                            <img src={Panel} className="img-fluid" alt='No disponible' />
                        </div>
                        <div className="col-md-4">
                            <p className="text-muted">{ubicacion}</p>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6 text-center">
                            <div className="mb-3">
                            <>
                                {disponible === true ? (
                                    <>
                                        <p className="font-weight-bold display-5" style={{ color: 'green', fontWeight: 'bold', margin: 5 }}>Disponible</p>
                                        <div style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <input
                                                className="form-control mb-2"
                                                type="text"
                                                secureTextEntry={false}
                                                placeholder="Ingresa el token"
                                                value={tokenInput}
                                                onChange={(e) => setTokenInput(e.target.value)}
                                            />
                                                <button onClick={usar} className="btn btn-primary btn-lg">
                                                <span style={{ color: 'black', textAlign: 'center', paddingHorizontal: 10, paddingVertical: 5, fontSize: 19 }}>Usar banco</span>
                                            </button>
                                            <p style={{ textAlign: 'center', color: 'darkred' }}>{mensaje}</p>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <p style={{ color: 'darkred', fontWeight: 'bold', fontSize: 20 }}>En uso</p>
                                        {correo === usuario ? (
                                            <div style={{ justifyContent: 'center', width: '100%' }}>
                                                <p style={{ color: 'black', fontSize: 18 }}>Token actual: <span style={{ color: 'green', fontWeight: 'bold' }}>{token}</span></p>
                                                <div style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                            <button className="btn btn-primary btn-lg" onClick={dejarUsar}>
                                                        <span style={{ color: 'black', textAlign: 'center', fontSize: 18, paddingHorizontal: 0, paddingVertical: 5 }}>Dejar de usar banco</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                        {rol === "1" && correo !== usuario ? (
                                            <div style={{ justifyContent: 'center', width: '100%' }}>
                                                <p style={{ color: 'black', fontSize: 18 }}>Token actual: <span style={{ color: 'green', fontWeight: 'bold' }}>{token}</span></p>
                                                <div style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                                    <p style={{ color: 'black', textAlign: 'center', fontSize: 18, paddingHorizontal: 0, paddingVertical: 5 }}>En uso por: {usuario}</p>
                                                            <button onClick={dejarUsar} className="btn btn-primary btn-lg">
                                                        <span style={{ color: 'black', textAlign: 'center', fontSize: 18, paddingHorizontal: 0, paddingVertical: 5 }}>Liberar banco</span>
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div></div>
                                        )}
                                    </>
                                )}
                            </>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="text-center">
                                <h2 className="font-weight-bold display-5">Ubicación</h2>
                                <div className="embed-responsive embed-responsive-4by3" style={{ height: '300px' }}>
                                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d277.492400890575!2d-99.47617735078741!3d19.340251995488888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1711948979078!5m2!1ses-419!2smx" allowFullScreen loading="lazy" title="Map"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
