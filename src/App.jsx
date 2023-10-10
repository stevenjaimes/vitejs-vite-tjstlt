import './App.css';
import AgregarUsuario from './components/AgregarUsuario';
import EditarUsuario from './components/EditarUsuario';
import ListaUsuario from './components/ListaUsuario';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListaUsuario/>} exact> </Route>
        <Route path='/agregarusuario' element={<AgregarUsuario/>} exact> </Route>
        <Route path='/editarusuario' element={<EditarUsuario/>} exact></Route>
      </Routes>
    </BrowserRouter>

  </div>
    );
}

export default App
