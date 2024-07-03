import { useEffect, useState } from "react";
import { Image, Spinner } from "react-bootstrap";
import Slider from "react-slick";

const Galleria = ({ saga }) => {
  /*  state = {
    arrayFilms: [],
    isLoading: false,
  }; */

  const [arrayFilms, setArrayFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <div className="slider-container">
        <Slider {...settings}>
          {arrayFilms.map((film) => (
            <Image className=" w-100 poster-film" src={film.Poster} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Galleria;
