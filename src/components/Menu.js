import { Link } from "react-router-dom"


const MenuPrincipal = () => {

  return <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link"><Link to="/proyecto">Crear Proyecto</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link"><Link to="/proyecto/listar">Ver Proyectos</Link></a>
    </li>
    <li class="nav-item">
      <a class="nav-link"><Link to="usuario">Usuarios</Link></a>
    </li>
  </ul>
}

export default MenuPrincipal