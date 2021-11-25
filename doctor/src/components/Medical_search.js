import React from 'react';
import {useParams, Outlet} from 'react-router-dom';
import 의료진목록 from "../data/의료진목록";
import {Link} from 'react-router-dom'
function Medical_search(props) {

    return (
        <div className="container" style={{marginTop:'64px'}}>
            <div className="의료진소개-title">
                10년차 이상, 믿음직한 전문의들이<br/> 기다리고 있습니다.
            </div>
            <div className="row" style={{marginTop: '64px'}}>
        {의료진목록.map((a, i) => {
          return (
            <Link
              className="col-xl-4 col-lg-6 col-md-6 professor-card"
              id="wrapper"
              to={`${a.name[1]}`}
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

export default Medical_search;