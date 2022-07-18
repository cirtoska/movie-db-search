import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./components/context";
import NotFound from "./NotFound";
import Movies from "./Movies";
import { FaStar } from "react-icons/fa";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });

  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (data.Response === "False") {
      setError({ show: true, msg: data.Error });
      setIsLoading(false);
    } else {
      setMovie(data);
      console.log(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${id}`);
  }, [id]);

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
      <section className="movie-title container">
        <h1>{title}</h1>
        <p className="rating">
          <FaStar className="icon-star" />
          {rating}
        </p>
      </section>
      <section className="details container">
        <p>{year}</p>
        <p>{rated}</p>
        <p>{runtime}</p>
        <div className="genre">{genre}</div>
      </section>
      <section className="info container">
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
      <div className="secondary-display">
        <Movies />
      </div>
    </>
  );
};

export default SingleMovie;
