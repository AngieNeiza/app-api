import { BrowserRouter as Router, Route, Routes, Link } from 'react-router'
import Home from './home/index'
import Favorito from './favoritos/index'
import Original from './original/index'
import Informativa from './informativa/index'
import Usuario from './usuario/index'
import Detalle from './detalle/index'

import './App.css'

function App() {
  return (
    <>
      <Router>
        <nav className="c-menu">
          <Link to="/"><img src="" /><p>Home</p></Link>
          <Link to="/favoritos"><img src="" /><p>Favoritos</p></Link>
          <Link to="/original"><img src="" /><p>Original</p></Link>
          <Link to="/informativa"><img src="" /><p>Informativa</p></Link>
          <Link to="/usuario"><img src="" /><p>Usuario</p></Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favorito />} />
          <Route path="/original" element={<Original />} />
          <Route path="/informativa" element={<Informativa />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
      </Router>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
