import React from "react";
import RingLoader from "react-spinners/RingLoader";


const Loader = () => {
  return (
    <div className="loading">
      <RingLoader
        color={"#5f36d6"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
