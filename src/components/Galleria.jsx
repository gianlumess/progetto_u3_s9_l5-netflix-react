import { Component } from "react";
import { Col, Image, Row } from "react-bootstrap";

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
      <section className="my-3 d-flex flex-column">
        <h2 className="mb-4">{this.props.saga + " Saga:"}</h2>
        <Row className="gx-2 gy-2">
          {this.state.arrayFilms.map((film) => (
            <Col xs={12} sm={6} md={4} xl={2} key={film.imdbID}>
              <Image className="img-fluid w-100" src={film.Poster} />
            </Col>
          ))}
        </Row>
      </section>
    );
  }
}

export default Galleria;
