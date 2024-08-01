import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Cadastro from "./Pages/Cadastro"
import Hall from "./Pages/Hall"
import Enderecos from "./Pages/Enderecos"
import Editar from "./Pages/Editar"
import Info from "./Pages/Info"

function RoutesApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>} />
            <Route path="/cadastro" element={<Cadastro/>} />
            <Route path="/hall" element={<Hall/>} />
            <Route path="/enderecos" element={<Enderecos/>} />
            <Route path="/editar" element={<Editar/>} />
            <Route path="/info" element={<Info/>} />
        </Routes>
        </BrowserRouter>
    )

}

export default RoutesApp;