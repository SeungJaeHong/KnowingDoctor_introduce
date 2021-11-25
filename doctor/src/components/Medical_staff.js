import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import 의료진목록 from "../data/의료진목록";
import "../style/Medi.scss";
import defaultImg from "../srcImage/defaultProfile.png";
function Medical_staff(props) {
  let url = useParams().name;
  console.log(url);
  console.log(의료진목록);
  const 대상 = 의료진목록.find((e) => {
    return e.name[1] === url || e.name[0] === url;
  });
  console.log(대상);
  const [info,setInfo] = useState(0);
  return (
    <div className="container mt-5">
      <div className="d-flex">
        <div className="profile">
          <img src={대상.프로필} alt="images" />
        </div>
        <div className="profile-text">
          <div className="name">
            이름: {대상.name[0]}({대상.name[1].replace(/\_/g, " ")})
          </div>
          <div className="진료과">진료과: {대상.진료과}</div>
          <div className="소속병원">소속병원: {대상.소속병원}</div>
          <div className="경력">{대상.경력[0].내용}</div>
        </div>
      </div>
      <div className="professor-profile-tab">
        <div className="tab-list active">학력</div>
        <div className="tab-list">경력</div>
        <div className="tab-list">수상경력</div>
        <div className="tab-list">논문</div>
      </div>
      <div className="전문진료분야">
        전문 진료 분야:{" "}
        {대상.전문진료분야.map((a, i) => {
          return i === 0 ? `${a}` : `, ${a}`;
        })}
      </div>
      <div className="경력 d-flex" style={{ gap: "5px" }}>
        <div>경력: </div>
        <ul>
          {대상.경력
            .sort((a, b) => {
              return a.id - b.id;
            })
            .map((a, i) => {
              return (
                <li>
                  {a.시작} {a.끝 !== undefined ? `~ ${a.끝}` : ""} {a.내용}
                </li>
              );
            })}
        </ul>
      </div>
      {대상.수상경력 === undefined ? (
        ""
      ) : (
        <div className="수상경력">
          <div>수상경력: </div>
          <ul>
            {대상.수상경력
              .sort((a, b) => {
                return a.id - b.id;
              })
              .map((a, i) => {
                return (
                  <li>
                    {a.날짜} {a.내용}
                  </li>
                );
              })}
          </ul>
        </div>
      )}
      {대상.학회활동 === undefined ? (
        ""
      ) : (
        <div className="학회활동">
          <div>학회활동: </div>
          <ul>
            {대상.학회활동
              .sort((a, b) => {
                return a.id - b.id;
              })
              .map((a, i) => {
                return (
                  <li>
                    {a.시작} {a.끝 !== undefined ? `~ ${a.끝}` : ""} {a.내용}
                  </li>
                );
              })}
          </ul>
        </div>
      )}

      <div className="논문">
        <div>논문: </div>
        <ul>
          {대상.논문.map((a, i) => {
            return (
              <li>
                <span style={{ fontWeight: "600" }}>&#91;{a.분류}&#93;</span>{" "}
                {a.제목}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Medical_staff;
