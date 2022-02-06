import React, {useEffect, useState} from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import clienteAxios from './config/axios';

//Componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  //state de la App
  const [citas, guardarCitas] = useState([]);

  //useEffect para consultar la base de datos
  useEffect(() => {
    const consultarAPI = () => {
      clienteAxios.get('/pacientes')
        .then(res => {
          guardarCitas(res.data);
        })
        .catch(error => {
          console.log(error);
        })
      }
    consultarAPI();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={()=> <Pacientes citas={citas}/>} />
        <Route exact path="/nueva" component={<NuevaCita />} />
        <Route exact path="/cita/:id" component={<Cita />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
