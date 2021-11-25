import React from "react";
import "../style/Home.scss";
import 의료진목록 from "../data/의료진목록";
import {Link} from 'react-router-dom'
function Home(props) {
  return (
    <div className="container mt-5">
      <Link to="/professor">
        <div className="btn-의료진소개">의료진 소개</div>
      </Link>
      
    </div>
  );
}

export default Home;
