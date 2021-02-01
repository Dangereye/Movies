import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  return (
    <section>
      <div className="container">
        <h2>404 - Page not found! </h2>
        <p>
          This is awkward. The page doesn't exist, or some other error occurred.
        </p>
        <button onClick={() => history.goBack()}>Go back</button>
      </div>
    </section>
  );
};

export default NotFound;
