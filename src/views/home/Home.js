import { Component, Fragment } from "react";
import { Note } from "./Note";

export class Home extends Component {
  movies = [
    {
      title: "Coup de foudre à Notting Hill",
      note: 5,
    },
    {
      title: "Piège de cristal",
    },
    {
      title: "Rasta Rocket",
    },
    {
      title: "Le Plus beau des combats",
    },
    {
      title: "La Cité de la peur",
    },
  ];

  constructor(props) {
    super(props);
    this.state = { movies: this.movies };
  }

  changeNote(newNote, indexMovie) {
    this.setState((prevState) => {
      prevState.movies[indexMovie].note = newNote;
      return prevState;
    });
  }

  render() {
    const movies = this.state.movies.map((m, i) => {
      let note;
      if (m.note) {
        note = <span className="badge badge-primary ml-2">{m.note}</span>;
      }
      return (
        <li key={i}>
          {m.title}
          {note}
          <Note
            currentNote={m.note}
            onChangeNote={(newNote) => this.changeNote(newNote, i)}
          ></Note>
        </li>
      );
    });
    return (
      <Fragment>
        <h1>My home</h1>
        <ul>{movies}</ul>
      </Fragment>
    );
  }
}
