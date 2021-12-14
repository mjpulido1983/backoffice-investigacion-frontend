import { Link } from "react-router-dom"
import { useHistory } from "react-router";


const MenuPrincipal = () => {
  const his = useHistory();
  let token = localStorage.getItem('auth_token')

  const cerrar = () => {
    localStorage.clear()
    his.push("/")
  }
  if (token) {
    return <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link"><Link to="/proyecto">Crear Proyecto</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="/proyecto/listar">Ver Proyectos</Link></a>
        </li>
        <li className="nav-item">
          <a className="nav-link"><Link to="usuario">Usuarios</Link></a>
        </li>
        <li className="nav-item">
          <button onClick={cerrar}>Cerrar sesión</button>
        </li>
      </ul>
    </div>
  } else {

    his.push("/")
    return <div></div>
  }

}

export default MenuPrincipal