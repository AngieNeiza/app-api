import { useState } from 'react'
import './style.css'

function Usuario() {
  const [nombre, setNombre] = useState('Tu Nombre')
  const [usuario, setUsuario] = useState('tu_usuario')
  const [email, setEmail] = useState('tucorreo@example.com')
  const [editando, setEditando] = useState(false)

  const guardar = () => {
    setEditando(false)
  }

  return (
    <div className="usuario-container">
      <div className="usuario-avatar">
        {nombre.charAt(0).toUpperCase()}
      </div>

      {editando ? (
        <div className="usuario-form">
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />

          <label>Usuario</label>
          <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />

          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />

          <button className="btn-guardar" onClick={guardar}>Guardar</button>
        </div>
      ) : (
        <div className="usuario-info">
          <h1>{nombre}</h1>
          <p className="username">@{usuario}</p>
          <p className="email">{email}</p>
          <button className="btn-editar" onClick={() => setEditando(true)}>Editar perfil</button>
        </div>
      )}

      <div className="usuario-stats">
        <div className="stat">
          <span className="stat-num">10</span>
          <span className="stat-label">Usuarios en API</span>
        </div>
        <div className="stat">
          <span className="stat-num">100</span>
          <span className="stat-label">Posts totales</span>
        </div>
        <div className="stat">
          <span className="stat-num">500</span>
          <span className="stat-label">Comentarios</span>
        </div>
      </div>
    </div>
  )
}

export default Usuario
