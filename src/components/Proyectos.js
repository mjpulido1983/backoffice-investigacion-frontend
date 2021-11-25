import {
  useQuery,
  gql
} from "@apollo/client";

const Proyectos = () => {
  const PROYECTOS = gql`
  query  {
    proyectos {
      lider
      nombre
      presupuesto
    }
  }
`;
  const { loading, error, data } = useQuery(PROYECTOS)
  if (loading) return "<h1>Cargando</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre,presupuesto }) => (
    <tr>
      <td>{lider}</td>
      <td>{nombre}</td>
      <td>{presupuesto}</td>
    </tr>
  ));

  return <table>{datosTabla}</table>
}

export default Proyectos