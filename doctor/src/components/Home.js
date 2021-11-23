import React from "react";
import "../style/Home.scss";
import 의료진목록 from "../data/의료진목록";
function Home(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        {의료진목록.map((a, i) => {
          return (
            <div
              className="col-xl-4 col-lg-6 col-md-6 professor-card"
              id="wrapper"
            >
              <div className="professor-card-sizing">
                <div className="content"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
