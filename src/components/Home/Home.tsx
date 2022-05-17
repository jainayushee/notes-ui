import * as React from "react";
import Content from "../Content/Content";
import "./Home.css";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="top">
        <div className="header">
          {/* <img src="../../keep.png" alt="" /> */}
          <div className="align-middle fs-2 text">Keep</div>
          <div className="search">
            <input
              className="form-control"
              aria-label="search"
              placeholder="Search"
            ></input>
          </div>
          <div className="btn-group" role="group">
            <i className="fa-solid fa-arrow-rotate-right fa-lg ms-3"></i>
            <i className="fa-solid fa-bars-progress fa-lg ms-3"></i>
            <i className="fa-solid fa-gear fa-lg ms-3"></i>
            <i className="fa-solid fa-user fa-2xl ms-4"></i>{" "}
          </div>
        </div>
      </div>
      <div className="bottom">
        <Content />
      </div>
    </div>
  );
}
