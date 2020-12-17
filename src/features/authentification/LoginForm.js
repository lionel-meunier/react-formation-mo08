import React from "react";

export class LoginForm extends React.Component {
  /**
   * Constructeur du composant
   */
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
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
    console.log("SOUMIT", event, this.state);
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
    return (
      <form onSubmit={(e) => this.submitForm(e)}>
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
        <div className="message d-none">Il y a une erreur</div>
        <div>
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    );
  }
}
