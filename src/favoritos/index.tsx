import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import './style.css'

interface Usuario {
  id: number
  name: string
  username: string
  email: string
  address: { city: string }
  company: { name: string }
}

function Favorito() {
  const [favoritos, setFavoritos] = useState<Usuario[]>([])
  const [todos, setTodos] = useState<Usuario[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setTodos(data)
        const guardados: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]')
        setFavoritos(data.filter((u: Usuario) => guardados.includes(u.id)))
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }
    fetchData()
  }, [])

  const toggleFavorito = (usuario: Usuario) => {
    const guardados: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]')
    let nuevos: number[]
    if (guardados.includes(usuario.id)) {
      nuevos = guardados.filter((id) => id !== usuario.id)
    } else {
      nuevos = [...guardados, usuario.id]
    }
    localStorage.setItem('favoritos', JSON.stringify(nuevos))
    setFavoritos(todos.filter((u) => nuevos.includes(u.id)))
  }

  const esFavorito = (id: number) => {
    const guardados: number[] = JSON.parse(localStorage.getItem('favoritos') || '[]')
    return guardados.includes(id)
  }

  return (
    <div className="favorito-container">
      <h2>Usuarios Favoritos</h2>

      {favoritos.length === 0 ? (
        <p className="vacio">No tienes favoritos aun. Agrega desde la lista.</p>
      ) : (
        <table className="tabla-favoritos">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>Empresa</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {favoritos.map((u) => (
              <tr key={u.id}>
                <td><Link to={`/detalle/${u.id}`}>{u.name}</Link></td>
                <td>{u.address.city}</td>
                <td>{u.company.name}</td>
                <td>
                  <button
                    className={esFavorito(u.id) ? 'btn-fav activo' : 'btn-fav'}
                    onClick={() => toggleFavorito(u)}
                  >
                    {esFavorito(u.id) ? 'Quitar' : 'Agregar'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h2>Todos los usuarios</h2>
      <table className="tabla-favoritos">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Ciudad</th>
            <th>Empresa</th>
            <th>Favorito</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((u) => (
            <tr key={u.id}>
              <td><Link to={`/detalle/${u.id}`}>{u.name}</Link></td>
              <td>{u.address.city}</td>
              <td>{u.company.name}</td>
              <td>
                <button
                  className={esFavorito(u.id) ? 'btn-fav activo' : 'btn-fav'}
                  onClick={() => toggleFavorito(u)}
                >
                  {esFavorito(u.id) ? 'Quitar' : 'Agregar'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Favorito
