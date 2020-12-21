import { Fragment } from "react";
import { useParams } from "react-router-dom";
export function UserDetail() {
  let { id } = useParams();

  return (
    <Fragment>
      <h1>User Detail</h1>
      {id}
    </Fragment>
  );
}
