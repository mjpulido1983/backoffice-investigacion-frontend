import React from 'react';
import ReactDOM from 'react-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

import Proyectos from './components/Proyectos';
import CrearProyecto from './components/CrearProyecto';
import ListaUsuarios from './components/ListaUsuarios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NoExiste from './components/NoExiste';
import MenuPrincipal from './components/Menu';
import EditarProyecto from './components/EditarProyecto';


localStorage.setItem('auth_token','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlc2l0byI6IkVzdHVkaWFudGUiLCJpYXQiOjE2Mzk0MDAzNzQsImV4cCI6MTYzOTQwNzU3NH0.hbhQJNg60W8zpXCGTnWVi12woPXBO1jz8mG4dNRtNPY')

const httpLink = new HttpLink({ uri: 'http://localhost:9092/graphql' });

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('auth_token');
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : ''
    }
  });
  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


const inicio = document.getElementById("root")

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MenuPrincipal} />
        <Route exact path="/usuario" component={ListaUsuarios} />
        <Route exact path="/proyecto" component={CrearProyecto} />
        <Route exact path="/proyecto/listar" component={Proyectos} />
        <Route exact path="/proyecto/:idProyecto" component={EditarProyecto} />
        <Route path="/" component={NoExiste} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>, inicio)