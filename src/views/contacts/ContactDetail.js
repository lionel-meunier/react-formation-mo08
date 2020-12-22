import { Component, Fragment } from "react";

export class ContactDetail extends Component {
  render() {
    const {
      params: { id },
    } = this.props.match;
    return (
      <Fragment>
        <h5>Contact detail</h5>
        {id}
      </Fragment>
    );
  }
}
