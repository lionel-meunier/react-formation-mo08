import React from "react";
import { authLogin } from "./auth-api";

export class LoginForm extends React.Component {
  /**
   * Constructeur du composant
   */
  constructor(props) {
    super(props);
    // Initialisation du state par défaut du composant
    this.state = {
      username: "",
      password: "",
      error: "",
      loading: false,
    };
  }

  /**
   * Fonction appeller à la soumission du formulaire
   *
   * Utiliser dans le JSX avec :
   * @example
   * <form onSubmit={(e) => this.submitForm(e)}>
   */
  submitForm(event) {
    event.preventDefault();
    event.stopPropagation();
    // modification du state pour signaler le début du traitement et réinitialiser l'erreur
    this.setState({ loading: true, error: "" });
    /**
     * Utilisation de la requête login
     */
    authLogin(this.state.username, this.state.password)
      .then((res) => {
        // En cas de success
        // modification du state pour signaler la fin du traitement
        this.setState({
          loading: false,
        });
        //Appelle de la fonction mis dans les propriétés (attribut html) à la création du composant par le parent
        this.props.onLogin(res);
      })
      .catch((error) => {
        // En cas d'erreur
        // modification du state pour signaler la fin du traitement et préciser qu'il y a une erreur
        this.setState({ loading: false, error });
      });
  }

  /**
   * Fonction appeller au changement d'un champs
   * Utiliser dans le JSX avec :
   * @example
   * <input type="text" onChange={(e) => this.submitForm(e)}/>
   */
  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  /**
   * Fonction construisant le html du composant
   * Appeller automatiquement par React
   */
  render() {
    let error;
    // Condition pour afficher l'erreur
    if (this.state.error) {
      error = (
        <div className="message alert alert-danger">Il y a une erreur</div>
      );
    }

    // Condition pour afficher si la requête est en cours de traitement
    let load;
    if (this.state.loading) {
      load = <div>Loading...</div>;
    }

    return (
      <form onSubmit={(e) => this.submitForm(e)}>
        <h4>{this.props.title}</h4>
        <div className="form-group">
          <label htmlFor="username">username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        {error}
        {load}
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}
