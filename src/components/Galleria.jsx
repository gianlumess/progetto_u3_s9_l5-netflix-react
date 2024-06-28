import { Component } from "react";

class Galleria extends Component {
  state = {
    arrayFilms: [],
  };

  filmsFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=dab26447&s=" + this.props.saga, {
      headers: {
        Authorization: "dab26447",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          console.log(resp);
          return resp.json();
        } else {
          throw new Error("Errore nel reperimento dei film");
        }
      })
      .then((films) => {
        console.log(films);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.filmsFetch();
  }
  render() {
    return;
  }
}

export default Galleria;
