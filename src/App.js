import "./App.scss";
import React from "react";
import { LoginForm } from "./features/authentification/LoginForm";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  loginUser(token) {
    console.log(token);
  }

  render() {
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

export default App;
