import './style.css'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'

interface UsuarioData {
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
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
}

function Detalle() {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<UsuarioData | null>(null)

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await res.json()
        setData(data)
      } catch (error) {
        console.error('Error cargando datos:', error)
      }
    }
    fetchData()
  }, [id])

  if (!data) return <p>Cargando...</p>

  return (
    <div className="detalle-container">
      <h1>{data.name}</h1>

      <h2>Informacion Personal</h2>
      <p><strong>Usuario:</strong> @{data.username}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Telefono:</strong> {data.phone}</p>
      <p><strong>Sitio web:</strong> <a href={`https://${data.website}`} target="_blank" rel="noreferrer">{data.website}</a></p>

      <h2>Direccion</h2>
      <p><strong>Calle:</strong> {data.address.street}, {data.address.suite}</p>
      <p><strong>Ciudad:</strong> {data.address.city}</p>
      <p><strong>Codigo postal:</strong> {data.address.zipcode}</p>
      <p><strong>Coordenadas:</strong> {data.address.geo.lat}, {data.address.geo.lng}</p>

      <h2>Empresa</h2>
      <p><strong>Nombre:</strong> {data.company.name}</p>
      <p><strong>Slogan:</strong> {data.company.catchPhrase}</p>
      <p><strong>Actividad:</strong> {data.company.bs}</p>
    </div>
  )
}

export default Detalle
