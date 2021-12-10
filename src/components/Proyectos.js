import {
  useQuery,
  gql
} from "@apollo/client";
import { useState } from "react";

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

  const { loading, error, data } = useQuery(PROYECTOS, {
    context: {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzc5MjQ5NDEsImV4cCI6MTYzNzkzMjE0MX0.A8vvtMPG0SDJKoewopdKQduOcQMhQoOsTxS9C_wWzvw'
      }
    }
  })
  if (loading) return "<h1>Cargando</h1>"
  if (error) return "<h1>problemas con el server de graphql</h1>"

  const datosTabla = data.proyectos.map(({ lider, nombre, presupuesto }) => (
    <tr>
      <td>{lider}</td>
      <td>{nombre}</td>
      <td>{presupuesto}</td>
    </tr>
  ));

  return (<div>
    <table className="table">{datosTabla}</table>
  </div>)
}

export default Proyectos