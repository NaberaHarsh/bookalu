import React from "react";
import "./PageNotFound.css";

const PageNotFound: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="pgNotFountH1">404</h1>
        <p className="pgNotFountP">Oops! Something is wrong.</p>
        {/* <a className="button" href="#">
          <i className="icon-home" /> Go back in initial page, is better.
        </a> */}
      </div>
    </div>
  );
};

export default PageNotFound;
