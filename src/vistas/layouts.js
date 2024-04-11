import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {

    const handleLogout = () => {
        // Eliminar todos los datos de sesión del almacenamiento local
        localStorage.removeItem('logueado');
        localStorage.removeItem('correo');
        localStorage.removeItem('nombre');
        localStorage.removeItem('apellidos');
        localStorage.removeItem('fn');
        localStorage.removeItem('genero');
        localStorage.removeItem('rol');
        localStorage.removeItem('foto');

        // Redireccionar al usuario a la página de inicio
        window.location.href = '/';
    };
    return (
        <div>
            <nav className="navbar-expand-lg navbar-dark bg-dark">
                <div className="px-5 py-2 bg-headerr" style={{width: '100%'}}>
                    <div className='navbarTitle'>
                    <button className="navbar-toggler" style={{ left: 10, position: 'absolute' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                    <text className="navbarTitle" style={{ marginTop: 5, textAlign: 'center', color: 'white', fontSize: 20 }}>Zennith</text>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                            {localStorage.getItem('correo') != null ? (
                                <><li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownPortfolio" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">{localStorage.getItem('nombre') != "" ? (localStorage.getItem('nombre')) : ('')}</a>
                                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownPortfolio">
                                        <li><button className="dropdown-item" onClick={handleLogout} >Cerrar sesión</button></li>
                                    </ul>
                                </li><li className="nav-item"><a className="nav-link" href="about.html"></a></li></>
                            ) : (
                                <li className="nav-item"><Link className="nav-link" to="/login">Iniciar sesión</Link></li>
                            )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>
            <footer className="bg-dark py-2 mt-auto">
                <div className="container px-5">
                    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                        <div className="col-auto"><div className="small m-0 text-white">Zennith - Startup 2024</div></div>
                        <div className="col-auto">
                            <span className="text-white">&middot;</span>
                            <a className="link-light small" href="#!">Reportar un problema</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Layout;
