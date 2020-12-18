import { Component } from "react";
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

  render() {
    const movies = this.movies.map((m, i) => (
      <li key={i}>
        {m.title}
        <Note currentNote={m.note}></Note>
      </li>
    ));
    return (
      <div>
        <h1>My home</h1>
        <ul>{movies}</ul>
      </div>
    );
  }
}
