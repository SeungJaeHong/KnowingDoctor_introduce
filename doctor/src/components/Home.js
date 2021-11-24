import React from "react";
import "../style/Home.scss";
import 의료진목록 from "../data/의료진목록";
import {Link} from 'react-router-dom'
function Home(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        {의료진목록.map((a, i) => {
          return (
            <Link
              className="col-xl-4 col-lg-6 col-md-6 professor-card"
              id="wrapper"
              to={`professor/${a.name[1]}`}
            >
              <div className="professor-card-sizing">
                <div className="content d-flex">
                  <div className="profile">
                    <img src={a.프로필} alt="" />
                  </div>
                  <div className="texts">
                    <div className="title">
                      <div>{a.name[0]}</div>
                      <div>{a.진료과}</div>
                    </div>
                    <div>{a.경력[0].내용}</div>
                    <div></div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
