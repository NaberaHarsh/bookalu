import React from "react";
import "./Loader.css";

const Loader: React.FC = () => (
  <div className="loaderParent">
    <div className="loader">
      <span className="circle1" />
      <span className="circle2" />
      <span className="circle3" />
      <span className="circle4" />
      <span className="circle5" />
      <span className="circle6" />
    </div>
  </div>
);

export default Loader;
