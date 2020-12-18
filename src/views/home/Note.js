import { Component, Fragment } from "react";

export class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNote: this.props.currentNote,
    };
  }

  render() {
    const buttons = [1, 2, 3, 4, 5].map((currentNote) => (
      <button
        type="button"
        key={currentNote}
        className="btn btn-default"
        onClick={() => this.setState({ currentNote })}
      >
        {currentNote}
      </button>
    ));

    return (
      <Fragment>
        {this.state.currentNote && (
          <span className="badge badge-primary ml-2">
            {this.state.currentNote}
          </span>
        )}
        {buttons}
      </Fragment>
    );
  }
}
