import { Component, useContext, ReactCurrentDispatcher, Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  matchPath,
} from "react-router-dom";

import { ContactDetail } from "./ContactDetail";

export class Contacts extends Component {
  render() {
    const { url, path } = this.props.match;

    const contacts = [1, 2, 3].map((id) => {
      const urlTo = `${url}/${id}`;
      return (
        <li key={id}>
          <Link to={urlTo}>Go to user {id}</Link>
        </li>
      );
    });

    return (
      <Router>
        <h1>Contacts</h1>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a contact.</h3>
            {contacts}
          </Route>
          <Route
            path={`${path}/:id`}
            render={(routeProps) => (
              <Fragment>
                <li>
                  <Link to={`${url}`}>Back to list</Link>
                </li>
                <ContactDetail {...routeProps} />
              </Fragment>
            )}
          />
        </Switch>
      </Router>
    );
  }
}
