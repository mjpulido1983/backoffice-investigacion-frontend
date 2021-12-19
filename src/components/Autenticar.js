import { useMutation } from "@apollo/client"
import gql from "graphql-tag"
import { useState } from "react";
import { useHistory } from "react-router";




const Login = () => {
    const his = useHistory();
    let user;
    const [pass, setPass] = useState("")
    const AUTENTICAR_USUARIO = gql`
        mutation autenticar($usuario:String,$clave:String){
            autenticar(usuario:$usuario,clave:$clave){
                status
                jwt
            }
        }
    `
    const changeClave = (e) => {
        e.preventDefault();
        setPass(e.target.value)
    }
    const [auth] = useMutation(AUTENTICAR_USUARIO)
    const autenticar = async (e) => {
        e.preventDefault();

        const { data: { autenticar } } = await auth({
            variables: {
                usuario: user.value,
                clave: pass
            }
        })
        if (autenticar.status != 200) {
            alert("Usuario y/o contrasena invalida")
        } else {
            localStorage.setItem('auth_token', autenticar.jwt)
            his.push("/menu")
        }
    }

    return <div class="logo" >
        <form class="formulario">
        <img class="formulario__img" src="images/formulario.png" alt="Usuario"/>
              <input class="formulario__input" type="email" placeholder="Usuario" ref={u => user = u} />
              <input class="formulario__input" type="password" placeholder="Codigo"
                value={pass}
                onChange={changeClave} />
              <select class="formulario__campo">
                <option disabled selected >Tipo de Usuario</option>
                <option >Administrador</option>
                <option >Lider</option>
                <option >Estudiante</option>
              </select>
              <button class="formulario__button" onClick={autenticar}>Log In</button>
        </form>
    </div>
}

export default Login