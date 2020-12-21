import "./App.scss";
import React, { Component } from "react";
import { LoginForm } from "./features/authentification/LoginForm";
import { Home } from "./views/home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Users } from "./views/users/Users";

/**
 * Composant central de votre application
 * Ce composant sera utiliser uniquement dans le fichier index.js
 */
class App extends Component {
  localStorageTokenKey = "myToken";

  constructor(props) {
    super(props);
    const token = localStorage.getItem(this.localStorageTokenKey);
    this.state = { isAuth: !!token, token };
  }

  /**
   * Appeler par le composant LoginForm pour préciser que l'uilisateur c'est bien connecté
   */
  loginUser(token) {
    localStorage.setItem(this.localStorageTokenKey, token);
    this.setState({ isAuth: true, token });
  }

  /**
   * Permet de déconnecté un utilisateur
   */
  logout() {
    localStorage.removeItem(this.localStorageTokenKey);
    this.setState({ isAuth: false, token: null });
  }

  /**
   * Rendu dynamique suivant l'état
   * La le rendu est complétement différent suivant l'état donc il y a plusieurs return.
   * Il faut faire attention la méthode "render" doit toujours avoir un return quelque soit les conditions ou l'état du composant.
   * Elle peut faire un return null si nécessaire
   */
  render() {
    if (this.state.isAuth) {
      return (
        <Router>
          <div className="App container">
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Utilisateurs</Link>
                </li>
              </ul>
            </nav>
            <button className="btn btn-danger" onClick={() => this.logout()}>
              Logout
            </button>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <h1>Cette page n'existe pas</h1>
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      return (
        <div className="App container">
          <LoginForm
            title={"Mon Titre"}
            onLogin={(token) => this.loginUser(token)}
          ></LoginForm>
        </div>
      );
    }
  }
}

export default App;
