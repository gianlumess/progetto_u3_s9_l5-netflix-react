import { useEffect, useState } from "react";
import { Col, Image, Row, Spinner } from "react-bootstrap";

const Galleria = ({ saga }) => {
  /*  state = {
    arrayFilms: [],
    isLoading: false,
  }; */

  const [arrayFilms, setArrayFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const filmsFetch = () => {
    //setto lo stato di caricamento a true prima che parta la fetch
    setIsLoading(true);

    fetch("http://www.omdbapi.com/?apikey=dab26447&s=" + saga)
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
        setArrayFilms(films.Search);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    filmsFetch();
  }, [saga]);
  return (
    <section className="my-3 d-flex flex-column">
      <h2 className="mb-4 d-inline-block">{saga + " Saga:"}</h2>
      {isLoading && <Spinner animation="border" role="status" variant="currentColor"></Spinner>}
      <Row className="gx-2 gy-2">
        {arrayFilms.map((film) => (
          <Col xs={12} sm={6} md={4} lg={3} xxl={2} key={film.imdbID}>
            <Image className="img-fluid w-100 poster-film" src={film.Poster} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Galleria;
