import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import './style.css'

interface Usuario {
  id: number
  name: string
  username: string
  email: string
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
  address: {
    city: string
    zipcode: string
  }
}

type FiltroTipo = 'todos' | 'norte' | 'sur' | 'este' | 'oeste'

const ciudadesNorte = ['Gwenborough', 'Howemouth', 'Aliyaview']
const ciudadesSur = ['Wisokyburgh', 'South Elvis', 'Bartholomebury']
const ciudadesEste = ['Roscoeview', 'Lebsackbury']
const ciudadesOeste = ['Venaville', 'McKenziehaven']

function getZona(ciudad: string): string {
  if (ciudadesNorte.includes(ciudad)) return 'norte'
  if (ciudadesSur.includes(ciudad)) return 'sur'
  if (ciudadesEste.includes(ciudad)) return 'este'
  if (ciudadesOeste.includes(ciudad)) return 'oeste'
  return 'todos'
}

function Home() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [filtro, setFiltro] = useState<FiltroTipo>('todos')
  const [busqueda, setBusqueda] = useState('')

  const filtros: FiltroTipo[] = ['todos', 'norte', 'sur', 'este', 'oeste']

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json()
        setUsuarios(data)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }
    fetchData()
  }, [])

  const usuariosFiltrados = usuarios.filter((u) => {
    const coincideBusqueda =
      busqueda.length < 3
        ? true
        : u.name.toLowerCase().includes(busqueda.toLowerCase()) ||
          u.username.toLowerCase().includes(busqueda.toLowerCase())

    const coincideFiltro =
      filtro === 'todos' ? true : getZona(u.address.city) === filtro

    return coincideBusqueda && coincideFiltro
  })

  return (
    <div className="home-container">
      <h2>Directorio de Usuarios</h2>

      <div className="filtros">
        {filtros.map((f) => (
          <button
            key={f}
            onClick={() => setFiltro(f)}
            className={filtro === f ? 'activo' : ''}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Buscar por nombre o usuario..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Ciudad</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {usuariosFiltrados.map((u) => (
            <tr
              key={u.id}
              className={
                busqueda.length >= 3 &&
                (u.name.toLowerCase().includes(busqueda.toLowerCase()) ||
                  u.username.toLowerCase().includes(busqueda.toLowerCase()))
                  ? 'resaltado'
                  : ''
              }
            >
              <td>{u.id}</td>
              <td>
                <Link to={`/detalle/${u.id}`}>{u.name}</Link>
              </td>
              <td>@{u.username}</td>
              <td>{u.address.city}</td>
              <td>{u.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home
