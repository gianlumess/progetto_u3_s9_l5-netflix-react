import { Component } from "react";
import { Carousel, Image } from "react-bootstrap";

class Galleria extends Component {
  state = {
    arrayFilms: [],
  };

  filmsFetch = () => {
    fetch("http://www.omdbapi.com/?apikey=dab26447&s=" + this.props.saga)
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
        this.setState({ arrayFilms: films.Search });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.filmsFetch();
  }
  render() {
    return (
      <Carousel>
        <section className="my-3 d-flex flex-column">
          <h3>{this.props.saga + " Saga:"}</h3>
          <div className="row gx-2 gy-2">
            {this.state.arrayFilms.map((film) => (
              <div className="col-12 col-sm-6 col-md-4 col-xl-2" key={film.imdbID}>
                <Image className="img-fluid w-100" src={film.Poster} />
              </div>
            ))}
          </div>
        </section>
      </Carousel>
    );
  }
}

export default Galleria;
