import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  console.log("Location", location);
  console.log("Params", params);
  return (
    <section>
      <div className="container">
        <h2>404 - Page not found!</h2>
        <p>
          This is awkward. The page either doesn't exist, or some other error
          occurred.
        </p>
        <button onClick={() => history.goBack()}>Go back</button>
      </div>
    </section>
  );
};

export default NotFound;
