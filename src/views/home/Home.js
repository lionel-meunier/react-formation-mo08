import { Component } from "react";

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
        {m.note && <span class="badge badge-primary ml-2">{m.note}</span>}
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
