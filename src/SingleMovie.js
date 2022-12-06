import React from "react";
import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";
import Movies from "./Movies";
import { FaStar } from "react-icons/fa";
import useFetch from "./components/useFetch";

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error.show) {
    return <NotFound />;
  }

  const {
    Poster: poster,
    Title: title,
    Year: year,
    Rated: rated,
    Runtime: runtime,
    imdbRating: rating,
    Genre: genre,
    Plot: plot,
    Director: director,
    Actors: stars,
  } = movie;
  return (
    <>
      <div className="container">
        <section className="movie-title">
          <h1>{title}</h1>
          <p className="rating">
            <FaStar className="icon-star" />
            {rating}
          </p>
        </section>
        <section className="details">
          <p>{year}</p>
          <p>{rated}</p>
          <p>{runtime}</p>
          <div className="genre">{genre}</div>
        </section>
        <section className="info">
          <img src={poster} alt={title} />
          <div className="plot">
            <div className="p-section">
              <p>{plot}</p>
              <p>
                <span>Director</span>
                {director}
              </p>
              <p>
                <span>Stars</span>
                {stars}
              </p>
            </div>
            <div className="btn-wrap">
              <Link to="/" className="btn">
                Back to Serach
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className="secondary-display">
        <Movies />
      </div>
    </>
  );
};

export default SingleMovie;
