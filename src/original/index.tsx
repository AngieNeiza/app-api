import { useState, useEffect } from 'react'
import './style.css'

interface Post {
  id: number
  userId: number
  title: string
  body: string
}

interface Usuario {
  id: number
  name: string
}

function Original() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<number>(1)
  const [posts, setPosts] = useState<Post[]>([])
  const [postSeleccionado, setPostSeleccionado] = useState<Post | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((r) => r.json())
      .then(setUsuarios)
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${usuarioSeleccionado}`)
      .then((r) => r.json())
      .then(setPosts)
    setPostSeleccionado(null)
  }, [usuarioSeleccionado])

  return (
    <div className="original-container">
      <h2>Posts por Usuario</h2>

      <div className="selector-usuario">
        {usuarios.map((u) => (
          <button
            key={u.id}
            onClick={() => setUsuarioSeleccionado(u.id)}
            className={usuarioSeleccionado === u.id ? 'activo' : ''}
          >
            {u.name}
          </button>
        ))}
      </div>

      <div className="posts-grid">
        {posts.map((p) => (
          <div
            key={p.id}
            className="post-card"
            onClick={() => setPostSeleccionado(p)}
          >
            <h3>{p.title}</h3>
            <p>{p.body.substring(0, 80)}...</p>
          </div>
        ))}
      </div>

      {postSeleccionado && (
        <div className="post-modal">
          <div className="post-modal-content">
            <button className="cerrar" onClick={() => setPostSeleccionado(null)}>X</button>
            <h3>{postSeleccionado.title}</h3>
            <p>{postSeleccionado.body}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Original
