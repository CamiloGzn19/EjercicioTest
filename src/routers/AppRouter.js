import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Estudiantes from "../components/Estudiantes";
import Login from '../components/Login';
import {Registro} from '../components/Registro';

export default function AppRouter() {
  return (
    <Router>
        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/registro"  component={Registro}/>
          <Route exact path="/estudiantes" component={Estudiantes}/>
        </Switch>
    </Router>
  );
}