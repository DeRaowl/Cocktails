import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page">
      <div className="error-container section">
        <h1>Oops! you reached dead end</h1>
        <Link to="/" className="btn-primary">
          Back home
        </Link>
      </div>
    </section>
  );
};

export default Error;
