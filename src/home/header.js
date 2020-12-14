import React from "react";
import SearchResults from "./searchresults"

const Header = () => {
  return (
    <div className="hero-div">
      <div className="container">
        <nav className="navbar mb-5">
          <a className="navbar-brand t-white" href="home">
            QuestionU
          </a>
        </nav>
        <div className="t-center">
          <div className="mb-5">
            <h3> Question Generation API</h3>
            <p>
              {" "}
              Enter a URL or a text to generate questions from our fast, easy,
              and complete API
            </p>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-6 col-md-6 col-xs-6 mb-4">
              <input type="text" className="form-control" />
            </div>
            <div className="col-lg-4 col-md-4 col-xs-6 mb-5 center-sm">
              <button type="button" className="search">
                TEST SEARCH
              </button>
            </div>
        </div>
      </div>
      <SearchResults />
    </div>
  );
};

export default Header;
