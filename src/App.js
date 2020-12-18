import "./App.scss";
import React, { Component } from "react";
import { LoginForm } from "./features/authentification/LoginForm";
import { Home } from "./views/home/Home";

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
        <div className="App container">
          <button className="btn btn-danger" onClick={() => this.logout()}>
            Logout
          </button>

          <Home></Home>
        </div>
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
