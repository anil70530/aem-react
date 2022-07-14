import React from "react";

export const PlaceholderComponent = () => {
  return (
    <div className="col-sm-3">
      <div className="card card-overflow" aria-hidden="true">
        <div className="card-img-top placeholder-glow h-25">
          <span className="placeholder col-12 h-25"></span>
        </div>

        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-6"></span>
            <span className="placeholder col-8"></span>
          </p>
          <a
            href="#"
            tabindex="-1"
            class="btn btn-primary disabled placeholder col-6"
          ></a>
        </div>
      </div>
    </div>
  );
};
