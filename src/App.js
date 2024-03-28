import React from "react";
import Inicio from './vistas/inicio';
import Login from "./vistas/auth/login";
import Registro from "./vistas/auth/registro";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
        <Route component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
