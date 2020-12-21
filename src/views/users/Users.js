import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import { UserDetail } from "./UserDetail";
export function Users() {
  let { path, url } = useRouteMatch();

  const users = [1, 2, 3].map((id) => {
    const urlTo = `${url}/${id}`;
    return (
      <li key={id}>
        <Link to={urlTo}>Go to user {id}</Link>
      </li>
    );
  });

  return (
    <Router>
      <h1>Users</h1>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a users.</h3>
          {users}
        </Route>
        <Route path={`${path}/:id`}>
          <li>
            <Link to={`${url}`}>Back to list</Link>
          </li>
          <UserDetail />
        </Route>
      </Switch>
    </Router>
  );
}
