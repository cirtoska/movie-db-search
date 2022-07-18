import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="container notfound">
      <h1 className="notfound">404 - Not Found</h1>
      <Link to="/" className="btn">
        Back to Serach
      </Link>
    </section>
  );
};

export default NotFound;
