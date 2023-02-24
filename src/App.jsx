import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navegacion } from './components/Navegacion';
import { Ejercicios } from './components/Ejercicios';
import { Inicio } from './components/Inicio';

function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/ejercicios' element={<Ejercicios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
