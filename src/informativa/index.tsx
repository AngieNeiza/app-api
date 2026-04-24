import './style.css'

function Informativa() {
  return (
    <div className="informativa-container">
      <div className="info-hero">
        <h1>JSONPlaceholder</h1>
        <p className="subtitulo">API gratuita para pruebas y prototipos</p>
      </div>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-icon">API</div>
          <h3>Base URL</h3>
          <p>https://jsonplaceholder.typicode.com</p>
        </div>

        <div className="info-card">
          <div className="info-icon">10</div>
          <h3>Usuarios disponibles</h3>
          <p>Endpoint /users retorna 10 usuarios con datos completos de perfil, empresa y ubicacion.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">GET</div>
          <h3>Metodo</h3>
          <p>Solo lectura. Todos los endpoints son GET sin necesidad de autenticacion.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">0$</div>
          <h3>Completamente gratuita</h3>
          <p>Sin limites de peticiones, sin registro, sin API key.</p>
        </div>
      </div>

      <div className="info-endpoints">
        <h2>Endpoints utilizados</h2>
        <table className="tabla-endpoints">
          <thead>
            <tr>
              <th>Endpoint</th>
              <th>Descripcion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>/users</code></td>
              <td>Lista de todos los usuarios</td>
            </tr>
            <tr>
              <td><code>/users/:id</code></td>
              <td>Detalle de un usuario especifico</td>
            </tr>
            <tr>
              <td><code>/posts?userId=:id</code></td>
              <td>Posts de un usuario especifico</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-campos">
        <h2>Campos del usuario</h2>
        <div className="campos-grid">
          <div className="campo"><span>name</span> Nombre completo</div>
          <div className="campo"><span>username</span> Nombre de usuario</div>
          <div className="campo"><span>email</span> Correo electronico</div>
          <div className="campo"><span>phone</span> Numero de telefono</div>
          <div className="campo"><span>website</span> Sitio web</div>
          <div className="campo"><span>address</span> Direccion y ciudad</div>
          <div className="campo"><span>company</span> Empresa y eslogan</div>
          <div className="campo"><span>geo</span> Coordenadas geograficas</div>
        </div>
      </div>
    </div>
  )
}

export default Informativa
